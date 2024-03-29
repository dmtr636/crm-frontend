import {observer} from "mobx-react";
import styled, {css} from "styled-components";
import {darkColors, redColors} from "../../../theme/colors";
import {ReactNode} from "react";

type ButtonColor = "dark" | "red"

const Container = styled.button<{color: ButtonColor, disabled?: boolean}>`
	height: 50px;
	background: ${props => props.color === "dark" ? darkColors.default : redColors.default};
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
        background: ${props => props.color === "dark" && !props.disabled && darkColors.hover};
        background: ${props => props.color === "red" && !props.disabled && redColors.hover};
	}
	
	&:active {
        background: ${props => props.color === "dark" && !props.disabled && darkColors.pressed};
        background: ${props => props.color === "red" && !props.disabled && redColors.pressed};
    }
`

type Props = {
	onClick?: () => void,
	children: ReactNode,
	color?: ButtonColor,
	disabled?: boolean
}

export const Button = observer((props: Props) => {
	return (
		<Container
			onClick={props.onClick}
			color={props.color ?? "dark"}
			disabled={props.disabled}
		>
			{props.children}
		</Container>
	)
})