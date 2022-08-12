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
    background: linear-gradient(91.32deg, #1F232C 0%, #3B4252 100%);
    background: ${props => props.processing && '#1F232C'};


    ${props => props.error && `
    background: #1F232C;
  `}

    ${props => props.disabled && `
    background: none;
    color: #1F232C;
    opacity: 0.5;
    border: 3px solid #1F232C;
    cursor: default;
  `} ${props => (!props.disabled && !props.processing && !props.error) && `
    &:hover {
      background: linear-gradient(91.32deg, #363D4B 0%, #454D60 100%);
    }
    &:active {
      background: #1F232C;
    }
  `} @media screen and ${device.phone} {
        width: 280px;
        height: 48px;
        border-width: 2px;
        font-size: 24px;
    }
`

type Props = {
	disabled?: boolean,
	error?: boolean,
	processing?: boolean
}

export const LoginFormButton = observer((props: Props) => {
	const loginStore = LoginStore
	let text = "войти"
	if (loginStore.isLogining) {
		text = "момент.."
	}
	if (loginStore.error) {
		text = "что-то не так"
	}

	return (
		<Button
			disabled={props.disabled}
			error={props.error}
			type={"submit"}
			processing={loginStore.isLogining}
		>
			{text}
		</Button>
	)
})