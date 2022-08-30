import {makeAutoObservable} from "mobx";
import {validateEmail} from "../utils/utils";
import axios from "axios";
import {LOGIN_ENDPOINT} from "../api/endoints";
import {AppStore} from "./AppStore";

export class LoginStore {
	email = ""
	password = ""
	error = false
	isProcessing = false
	appStore: AppStore

	constructor(store: AppStore) {
		this.appStore = store

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
		this.isProcessing = true
		const res = await axios.post(LOGIN_ENDPOINT, {
			email: this.email,
			password: this.password
		})
		this.isProcessing = false

		let data = res.data
		if (!data.error) {
			this.appStore.memberStore.member = data
			this.error = false
			return true
		} else {
			this.error = true
			this.password = ""
			return false
		}
	}

	get formValidated() {
		return !!(this.password.length > 0 && validateEmail(this.email));
	}
}