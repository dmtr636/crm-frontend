import {NotificationType} from "../../enums/NotificationType";

export interface INotification {
	id: number,
	type: NotificationType,
	member_id: number,
	project_id: number
}