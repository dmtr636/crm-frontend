import {observer} from "mobx-react";
import {useStore} from "../../../hooks/hooks";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ProjectInfoDrawerHeader} from "./ProjectInfoDrawerHeader";

const ANIMATION_DURATION = 100

const Background = styled.div<{ backgroundOpacity: number }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
    background: rgba(31, 35, 44, ${props => props.backgroundOpacity});
	z-index: 20;

    transition: background ${ANIMATION_DURATION}ms ease-out;
`
const Drawer = styled.div<{ drawerTranslate: string }>`
	position: absolute;
	top: 0;
	right: 0;
	width: 730px;
	background: #FFFFFF;
	min-height: 100%;
	
	transform: translateX(${props => props.drawerTranslate});
	
	transition: transform ${ANIMATION_DURATION}ms ease-out;
`

export const ProjectInfoDrawer = observer(() => {
	const store = useStore()
	const [drawerTranslate, setDrawerTranslate] = useState("100%")
	const [backgroundOpacity, setBackgroundOpacity] = useState(0)

	const handleClose = () => {
		setDrawerTranslate("100%")
		setBackgroundOpacity(0)
		setTimeout(() => {
			store.projectInfoDrawerStore.close()
		}, ANIMATION_DURATION)
	}

	useEffect(() => {
		if (store.projectInfoDrawerStore.isShowDrawer) {
			setDrawerTranslate("0")
			setBackgroundOpacity(0.7)
		}
	}, [store.projectInfoDrawerStore.isShowDrawer])

	return (
		<>
			{store.projectInfoDrawerStore.isShowDrawer &&
                <Background backgroundOpacity={backgroundOpacity}>
					<Drawer drawerTranslate={drawerTranslate}>
						<ProjectInfoDrawerHeader onClose={handleClose} />
					</Drawer>
                </Background>
			}
		</>
	)
})