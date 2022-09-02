import {AppStore} from "./AppStore";
import {INotification} from "../interfaces/entities/INotification";
import axios from "axios";
import {NOTIFICATIONS_ENDPOINT} from "../api/endoints";
import {makeAutoObservable} from "mobx";

export class NotificationStore {
	appStore: AppStore
	notifications: INotification[] = []

	constructor(store: AppStore) {
		this.appStore = store
		makeAutoObservable(this)
	}

	fetchNotifications() {
		axios.get(NOTIFICATIONS_ENDPOINT, {
			params: {
				filter: {
					member_id: this.appStore.memberStore.member?.id
				}
			}
		}).then(res =>
			this.notifications = res.data.result
		)
	}

	clearNotifications() {
		axios.delete(NOTIFICATIONS_ENDPOINT, {
			data: {
				filter: {
					member_id: this.appStore.memberStore.member?.id
				}
			}
		})
		this.notifications = []
	}
}