import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import axios from "axios";
import {AUTHENTICATE_ENDPOINT, LOGOUT_ENDPOINT, MEMBERS_ENDPOINT} from "../api/endoints";
import LoginStore from "./loginStore";
import {IMember} from "../interfaces/IMember";
import {createFieldsFromDialogData} from "../utils/utils";
import {IObjectStore} from "../interfaces/IObjectStore";

class MemberStore implements IObjectStore {
	member?: IMember
	members?: IMember[]

	constructor() {
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
		LoginStore.clear()
		axios.get(LOGOUT_ENDPOINT)
	}

	fetchMembers() {
		axios.get(MEMBERS_ENDPOINT).then(res => {
			this.members = res.data.result
		})
	}

	addFromDialog(data: IDialogData) {
		const fields = createFieldsFromDialogData(data)
		axios.post(MEMBERS_ENDPOINT, fields).then(res => {
			this.members?.push(res.data.result)
		})
	}

	delete(id: string) {
		axios.delete(MEMBERS_ENDPOINT, {
			data: {
				id: id
			}
		})
		this.members = this.members?.filter(member => member.id !== id)
	}

	editFromDialog(data: IDialogData, id: string) {
		const fields = createFieldsFromDialogData(data)
		fields["id"] = id
		axios.patch(MEMBERS_ENDPOINT, fields).then(res => {
			let newMember = res.data.result
			this.members = this.members?.map(member =>
				member.id === newMember.id ? newMember : member
			)
		})
	}
}

export const memberStore = new MemberStore()