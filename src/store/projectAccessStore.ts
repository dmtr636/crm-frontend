import {AppStore} from "./AppStore";
import {makeAutoObservable} from "mobx";
import {IProjectAccess} from "../interfaces/entities/IProjectAccess";

export class ProjectAccessStore {
	appStore: AppStore

	constructor(store: AppStore) {
		this.appStore = store
		makeAutoObservable(this)
	}

	get accesses() {
		return this.appStore.projectAccessObjectStore.objects ?? []
	}

	getValuesCount(access: IProjectAccess) {
		let count = 0
		if (access.email) count++
		if (access.login) count++
		if (access.password) count++
		if (access.api) count++
		return count
	}

	get accessesWith2Values() {
		return this.accesses?.filter(access => this.getValuesCount(access) === 2) ?? []
	}

	get accessesWith3Values() {
		return this.accesses?.filter(access => this.getValuesCount(access) === 3) ?? []
	}
}