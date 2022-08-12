import styled from "styled-components";

const Background = styled.div<{opacity: number}>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
    background: #1F232C;
    opacity: ${props => props.opacity};
	z-index: 5;
`

export const Backdrop = (props: {opacity: number}) => {
	return (
		<Background opacity={props.opacity} />
	)
}