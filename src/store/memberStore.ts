import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import {dialogStore} from "./dialogStore";
import axios from "axios";
import {MEMBERS_ENDPOINT} from "../api/endoints";

class MemberStore {
	constructor() {
		makeAutoObservable(this)
	}

	addMemberFromDialog(data: IDialogData) {
		let fieldsMap = new Map<string, string>()
		data.form?.fields.forEach(field => fieldsMap.set(field.name, field.value ?? ""))
		let fields = Object.fromEntries(fieldsMap)
		axios.post(MEMBERS_ENDPOINT, fields)
	}
}

export const memberStore = new MemberStore()