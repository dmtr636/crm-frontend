import styled from "styled-components";
import {observer} from "mobx-react";
import LoginStore from "../../store/loginStore";
import {device} from "../../constants/breakpoints";

const Button = styled.button<Props>`
    width: 100%;
    height: 76px;
    margin-top: auto;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: 0.04em;
    color: white;

    border-radius: 5px;
	
	background: ${props => {
		switch (props.state) {
			case "active": return `#1F232C`
			case "disabled": return 'none'
			case "error": return `#0F131C`
			case "processing": return '#0F131C'
		}
	}};
	
    ${props => props.state === "disabled" && `
		color: #1F232C;
		opacity: 0.7;
		border: 3px solid #1F232C;
		cursor: default;
  	`} 
	
	${props => props.state === "active" && `
		&:hover {
		  background: #2D313A;
		}
		&:active {
		  background: #0F131C;
		}
  	`} 
	
	@media screen and ${device.phone} {
        width: 280px;
        height: 48px;
        border-width: 2px;
        font-size: 24px;
    }
`

type Props = {
	state: LoginFormButtonState
}

export type LoginFormButtonState = "active" | "disabled" | "error" | "processing"

export const LoginFormButton = observer((props: Props) => {
	const loginStore = LoginStore
	let text = "войти"
	if (loginStore.isProcessing) {
		text = "момент.."
	}
	if (loginStore.error) {
		text = "что-то не так"
	}

	return (
		<Button
			state={props.state}
			disabled={props.state !== "active"}
			type={"submit"}
		>
			{text}
		</Button>
	)
})