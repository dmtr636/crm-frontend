import styled from "styled-components";
import loginPageBg from "../../images/loginPageBg.jpg"
import {LoginForm} from "./LoginForm";
import loginPageLogo from "../../images/loginPageLogo.svg"
import {observer} from "mobx-react";
import {useEffect} from "react";
import UserStore from "../../store/userStore";
import {useNavigate} from "react-router-dom";
import {device} from "../../constants/breakpoints";

const Container = styled.div`
	background-image: url(${loginPageBg});
	background-position: center;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	width: 100vw;
	height: 100vh;

	@media ${device.phone}, ${device.tablet}, ${device.tabletL} {
		align-items: center;
		justify-content: start;
	}
	@media screen and ${device.phone} {
		height: unset;
		min-height: calc(var(--vh, 1vh) * 100);
	}
`
const Logotype = styled.img`
	position: absolute;
	top: 60px;
	left: 60px;


	@media 
	screen and ${device.phone}, 
	screen and ${device.tablet}, 
	screen and ${device.tabletL}{
		position: static;
		width: 580px;
		height: 35px;
		object-fit: contain;
		object-position: left;
	}
	@media screen and ${device.phone} {
		margin-top: 40px;
		width: 320px;
	}
	@media screen and ${device.tablet} {
		margin-top: 82px;
	}
	@media screen and ${device.tabletL} {
		margin-top: 104px;
	}
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