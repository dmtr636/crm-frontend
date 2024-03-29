import styled from "styled-components";
import {HeaderSearch} from "./HeaderSearch";
import notificationsIcon from "assets/header/headerNotifications.svg"
import activeNotificationsIcon from "assets/header/headerNotificationsActive.svg"
import arrow from "assets/header/headerArrow.svg"
import {url} from "../../../utils/utils";
import {useState} from "react";
import {HeaderMemberMenu} from "./HeaderMemberMenu";
import {useStore} from "../../../hooks/hooks";
import {IMember} from "../../../interfaces/entities/IMember";
import {observer} from "mobx-react";
import {HeaderNotifications} from "./HeaderNotifications";

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
	object-fit: cover;
	cursor: pointer;
`
const Arrow = styled.button<{ rotated: boolean }>`
    background: url(${arrow});
    width: 34px;
    height: 34px;
    margin-left: 8px;

    transform: rotate(${props => props.rotated && '180deg'});
`

export const Header = observer(() => {
	const store = useStore()
	const [isShowMenu, setShowMenu] = useState(false)
	const [isShowNotifications, setShowNotifications] = useState(false)

	const getAvatarUrl = (member: IMember) => {
		if (member.avatar.length) {
			return url(member.avatar)
		} else {
			return `https://ui-avatars.com/api/?name=${member.name}`
		}
	}

	const getNotificationsIcon = () => {
		if (store.notificationStore.notifications.length) {
			return activeNotificationsIcon
		} else {
			return notificationsIcon
		}
	}

	return (
		<>
			<Container>
				<HeaderSearch/>
				<Notifications
					src={getNotificationsIcon()}
					onClick={() => setShowNotifications(!isShowNotifications)}
				/>
				<Avatar
					draggable={false}
					src={getAvatarUrl(store.memberStore.member!)}
					onClick={() => setShowMenu(!isShowMenu)}
				/>
				<Arrow
					onClick={() => setShowMenu(!isShowMenu)}
					rotated={isShowMenu}
				/>
			</Container>

			{isShowMenu &&
                <HeaderMemberMenu onClose={() => setShowMenu(false)} />
			}
			{isShowNotifications &&
				<HeaderNotifications onClose={() => setShowNotifications(false)} />
			}
		</>
	)
})