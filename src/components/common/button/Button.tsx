import {observer} from "mobx-react";
import styled from "styled-components";
import {colors} from "../../../theme/colors";
import {ReactNode} from "react";

const Container = styled.button`
	height: 50px;
	background: ${colors.default};
	padding: 0 34px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
	
	&:hover {
		background: ${colors.hover};
	}
	
	&:active {
		background: ${colors.pressed};
	}
`

type Props = {
	onClick: () => void,
	children: ReactNode
}

export const Button = observer((props: Props) => {
	return (
		<Container onClick={props.onClick}>
			{props.children}
		</Container>
	)
})