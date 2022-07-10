import styled from "styled-components";
import loginPageBg from "../../images/loginPageBg.jpg"
import {LoginForm} from "./LoginForm";
import loginPageLogo from "../../images/loginPageLogo.svg"
import {observer} from "mobx-react";
import {useEffect} from "react";
import UserStore from "../../store/userStore";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
	background-image: url(${loginPageBg});
	background-position: center;
	background-size: cover;
	width: 100vw;
	height: 100vh;
`
const Logotype = styled.img`
	position: absolute;
	top: 60px;
	left: 60px;
`

export const LoginPage = observer(() => {
	const userStore = UserStore
	const navigate = useNavigate()
	const audio = new Audio("https://static.wikia.nocookie.net/dota2_gamepedia/images/7/75/Music_default_ui_main_01.mp3")
	audio.currentTime = 5

	useEffect(() => {
		if (userStore.user) {
			navigate("/", {replace: true})
		}
	}, [])

	return (
		<div onClick={() => audio.play()}>
			<Container>
				<Logotype src={loginPageLogo} />
				<LoginForm />
			</Container>
		</div>
	)
})