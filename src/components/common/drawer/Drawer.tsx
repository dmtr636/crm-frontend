import {observer} from "mobx-react";
import {ReactNode, useEffect, useState} from "react";
import {DrawerHeader} from "./DrawerHeader";
import styled from "styled-components";

const ANIMATION_DURATION = 100

const Backdrop = styled.div<{ opacity: number }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background: rgba(31, 35, 44, ${props => props.opacity});
    transition: background ${ANIMATION_DURATION}ms ease-out;
`
const Container = styled.div<{ translateValue: string }>`
    position: absolute;
    top: 0;
    right: 0;
    width: 730px;
    background: #FFFFFF;
    height: 100%;
	display: flex;
	flex-direction: column;
    transform: translateX(${props => props.translateValue});
    transition: transform ${ANIMATION_DURATION}ms ease-out;
`
const Content = styled.div`
	margin-right: -1px;
    padding: 48px 48px 22px 48px;
	overflow-y: auto;
`

type Props = {
	children: ReactNode
	title?: string
	isShow: boolean
	onClose: () => void
}

export const Drawer = observer((props: Props) => {
	const {children, title, isShow, onClose} = props
	const [drawerTranslate, setDrawerTranslate] = useState("100%")
	const [backgroundOpacity, setBackgroundOpacity] = useState(0)

	const handleClose = () => {
		setDrawerTranslate("100%")
		setBackgroundOpacity(0)
		setTimeout(() => {
			onClose()
		}, ANIMATION_DURATION)
	}

	useEffect(() => {
		if (isShow) {
			setDrawerTranslate("0")
			setBackgroundOpacity(0.7)
		}
	}, [isShow])

	return (
		<>
			{isShow &&
                <Backdrop opacity={backgroundOpacity}>
                    <Container translateValue={drawerTranslate}>
                        <DrawerHeader
                            onClose={handleClose}
                            title={title}
                        />
                        <Content>
							{children}
                        </Content>
                    </Container>
                </Backdrop>
			}
		</>
	)
})