import {makeAutoObservable} from "mobx";
import axios from "axios";
import {AUTHENTICATE_ENDPOINT, LOGOUT_ENDPOINT} from "../api/endoints";
import LoginStore from "./loginStore";
import {IMember} from "../interfaces/IMember";

class MemberStore {
	member?: IMember

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
}

export const memberStore = new MemberStore()