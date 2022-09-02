import {observer} from "mobx-react";
import styled from "styled-components";
import {useStore} from "../../../hooks/hooks";
import {Button} from "../button/Button";
import {INotification} from "../../../interfaces/entities/INotification";
import {NotificationType} from "../../../enums/NotificationType";

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
    background: rgba(31, 35, 44, 0.7);
	z-index: 10;
`
const Container = styled.div`
	position: absolute;
	top: 102px;
	right: 188px;
    width: 510px;
    background: #FFFFFF;
    border-radius: 0px 0px 5px 5px;
	padding: 17px 26px;
`
const Title = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #000000;
`
const Item = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #000000;
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 26px;
	margin-top: 26px;
	margin-bottom: 48px;
`

export const HeaderNotifications = observer((props: {onClose: () => void}) => {
	const {onClose} = props
	const store = useStore()
	const notificationsCount = store.notificationStore.notifications.length

	const getTitleText = () => {
		if (notificationsCount) {
			return "Новые уведомления"
		} else {
			return "Нет уведомлений"
		}
	}

	const getNotificationText = (notification: INotification) => {
		switch (notification.type) {
			case NotificationType.newTasksInProject:
				const projectName = store.projectStore.getProjectById(notification.project_id)?.name
				return `Новые задачи в проекте: ${projectName}`
		}
	}

	const handleClear = () => {
		store.notificationStore.clearNotifications()
	}

	return (
		<Background onClick={() => onClose()}>
			<Container onClick={(event) => event.stopPropagation()}>
				<Title>
					{getTitleText()}
				</Title>
				{notificationsCount > 0 &&
					<>
						<List>
							{store.notificationStore.notifications.map(notification =>
								<Item>{getNotificationText(notification)}</Item>
							)}
						</List>
                        <Button onClick={handleClear}>
                            Очистить
                        </Button>
					</>
				}
			</Container>
		</Background>
	)
})