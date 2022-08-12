import {makeAutoObservable} from "mobx";
import {IUser} from "../interfaces/IUser";
import axios from "axios";
import {AUTHENTICATE_ENDPOINT, LOGOUT_ENDPOINT} from "../api/endoints";
import LoginStore from "./loginStore";

class UserStore {
	user: IUser | undefined

	constructor() {
		makeAutoObservable(this)
	}

	async authenticate() {
		const res = await axios.get(AUTHENTICATE_ENDPOINT)
		let data = res.data
		if (!data.error) {
			this.user = data
			return true
		} else {
			return false
		}
	}

	logout() {
		this.user = undefined
		LoginStore.clear()
		axios.get(LOGOUT_ENDPOINT)
	}
}

export default new UserStore()