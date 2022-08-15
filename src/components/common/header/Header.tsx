import styled from "styled-components";
import {HeaderSearch} from "./HeaderSearch";
import notificationsIcon from "assets/headerNotifications.svg"
import avatar from "assets/headerAvatar.png"
import arrow from "assets/headerArrow.svg"
import {url} from "../../../utils/utils";
import userStore from "../../../store/userStore";

const Container = styled.header`
	width: 100%;
	height: 102px;
	background: white;
	display: flex;
	align-items: center;
	padding: 0 48px;
`
const Notifications = styled.img`
	margin-left: auto;
	cursor: pointer;
`
const Avatar = styled.img`
	margin-left: 48px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
`
const Arrow = styled.img`
	margin-left: 8px;
`

export const Header = () => {
	return (
		<Container>
			<HeaderSearch />
			<Notifications src={notificationsIcon} />
			<Avatar src={url(userStore.user?.avatar!)} />
			<Arrow src={arrow} />
		</Container>
	)
}