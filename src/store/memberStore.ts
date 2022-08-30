import {makeAutoObservable} from "mobx";
import axios from "axios";
import {AUTHENTICATE_ENDPOINT, LOGOUT_ENDPOINT} from "../api/endoints";
import {IMember} from "../interfaces/entities/IMember";
import {ISelectOptionsStore} from "../interfaces/ISelectOptionsStore";
import {ISelectOption} from "../interfaces/IDialogData";
import {AppStore} from "./AppStore";

export class MemberStore implements ISelectOptionsStore {
	member?: IMember
	appStore: AppStore

	constructor(store: AppStore) {
		this.appStore = store

		makeAutoObservable(this)
	}

	async authenticate() {
		const res = await axios.get(AUTHENTICATE_ENDPOINT)
		let data = res.data
		if (!data.error) {
			this.member = data
			return true
		}
		return false
	}

	logout() {
		this.member = undefined
		this.appStore.loginStore.clear()
		axios.get(LOGOUT_ENDPOINT)
	}

	get members() {
		return this.appStore.memberObjectStore.objects
	}

	get selectOptions(): ISelectOption[] {
		return this.members?.map(member => {
			const option: ISelectOption = {
				id: member.id.toString(),
				value: member.name
			}
			return option
		}) ?? []
	}
}