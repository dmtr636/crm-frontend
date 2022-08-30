import {makeAutoObservable} from "mobx";
import {AppStore} from "./AppStore";

export class ProjectTaskStore {
	appStore: AppStore

	constructor(store: AppStore) {
		this.appStore = store

		makeAutoObservable(this)
	}

	get tasks() {
		return this.appStore.taskObjectStore.objects
	}

	getTasksByCategory(category: string) {
		return this.tasks?.filter(task => task.category === category)
	}

	getCompletedTasksByCategory(category: string) {
		return this.getTasksByCategory(category)?.filter(task => task.completed)
	}
}