import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormField} from "./LoginFormField";
import {LoginFormButton, LoginFormButtonState} from "./LoginFormButton";
import {LoginFormLink} from "./LoginFormLink";
import {FormEvent, useState} from "react";
import loginStore from "../../store/loginStore";
import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {LoginFormMessage} from "./LoginFormMessage";
import styled from "styled-components";
import {device} from "../../constants/breakpoints";

const Form = styled.form`
    width: 580px;
    max-height: 880px;
    box-sizing: border-box;
    flex-grow: 1;

    padding: 40px;
    margin: 40px 0;

    display: flex;
    flex-direction: column;
    row-gap: 30px;

    background: #FFFFFF;
    border-radius: 5px;

    @media screen and ${device.phone} {
        width: 320px;
        max-height: 605px;
        padding: 30px 20px 50px 20px;
        row-gap: 20px;
    }
    @media screen and ${device.tablet} {
        margin: 82px 0 54px 0 ;
    }
    @media screen and ${device.tabletL} {
        margin-top: 104px;
    }
    @media screen and ${device.laptop} {
        margin-right: calc(60px + 120 * ((100vw - 1366px) / (1920 - 1366)));
    }
    @media screen and ${device.desktop} {
        margin-right: calc(180px + 60 * ((100vw - 1920px) / (2560 - 1920)));
    }
    @media screen and ${device.desktopL} {
        margin-right: 240px;
    }
`

export const LoginForm = observer(() => {
	const [showProblemMessage, setShowProblemMessage] = useState(false)
	const navigate = useNavigate()

	const login = async (event: FormEvent) => {
		event.preventDefault()
		const isLoggedIn = await loginStore.login()
		setShowProblemMessage(false)
		if (isLoggedIn) {
			navigate("/", {replace: true})
		}
	}

	const getLoginFormButtonState = ():LoginFormButtonState => {
		if (loginStore.error) {
			return "error"
		}
		if (loginStore.isProcessing) {
			return "processing"
		}
		if (!loginStore.formValidated) {
			return "disabled"
		}
		return "active"
	}

	return (
		<Form
			noValidate
			onSubmit={login}
		>
			<LoginFormHeader/>
			<LoginFormField
				type={"email"}
				value={loginStore.email}
				onChange={(value) => loginStore.setEmail(value)}
			/>
			<LoginFormField
				type={"password"}
				value={loginStore.password}
				onChange={(value) => loginStore.setPassword(value)}
			/>
			{(loginStore.error) &&
                <LoginFormMessage/>
			}
			{showProblemMessage &&
                <LoginFormLink
                    text={"Напишите Дмитрию в Telegram"}
                    href={"https://t.me/dmtr636"}
                />
			}
			<LoginFormButton
				state={getLoginFormButtonState()}
			/>
			<LoginFormLink
				onClick={() => {
					setShowProblemMessage(true)
					loginStore.error = false
				}}
				text={"Проблема со входом"}
			/>
		</Form>
	)
})