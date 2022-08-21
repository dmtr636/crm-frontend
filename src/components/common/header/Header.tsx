import styled from "styled-components";
import {HeaderSearch} from "./HeaderSearch";
import notificationsIcon from "assets/header/headerNotifications.svg"
import arrow from "assets/header/headerArrow.svg"
import {url} from "../../../utils/utils";
import {memberStore} from "../../../store/memberStore";

const Container = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 102px;
	background: white;
	display: flex;
	align-items: center;
	padding: 0 48px;
	z-index: 15;
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
			<Avatar src={url(memberStore.member?.avatar!)} />
			<Arrow src={arrow} />
		</Container>
	)
}