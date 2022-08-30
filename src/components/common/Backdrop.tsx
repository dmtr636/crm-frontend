import styled from "styled-components";
import {backdropStore, BackdropType} from "../../store/backdropStore";

const Background = styled.div<{zIndex: number}>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
    background: #1F232C;
    opacity: 0.7;
	z-index: ${props => props.zIndex};
`

export const Backdrop = (props: {type: BackdropType}) => {
	const getZIndex = () => {
		if (props.type === "content") {
			return 10
		} else {
			return 20
		}
	}

	return (
		<Background
			zIndex={getZIndex()}
			onClick={() => backdropStore.setIsShowBackdrop(false)}
		/>
	)
}