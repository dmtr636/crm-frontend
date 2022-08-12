import {makeAutoObservable} from "mobx";
import {validateEmail} from "../utils/utils";
import axios from "axios";
import {LOGIN_ENDPOINT} from "../api/endoints";
import UserStore from "./userStore";

class LoginStore {
	email = ""
	password = ""
	error = false
	isLogging = false

	constructor() {
		makeAutoObservable(this)
	}

	setEmail(email: string) {
		this.email = email
		this.error = false
	}
	setPassword(password: string) {
		this.password = password
		this.error = false
	}
	clear() {
		this.email = ""
		this.password = ""
	}

	async login() {
		this.isLogging = true
		const res = await axios.post(LOGIN_ENDPOINT, {
			email: this.email,
			password: this.password
		})
		this.isLogging = false

		let data = res.data
		if (!data.error) {
			UserStore.user = data
			this.error = false
			return true
		} else {
			this.error = true
			return false
		}
	}

	get formValidated() {
		return !!(this.password.length > 0 && validateEmail(this.email));
	}
}

export default new LoginStore()