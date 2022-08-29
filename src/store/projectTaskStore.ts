import {makeAutoObservable} from "mobx";
import {taskObjectStore} from "./objectStore";

class ProjectTaskStore {

	constructor() {
		makeAutoObservable(this)
	}

	get tasks() {
		return taskObjectStore.objects
	}

	getTasksByCategory(category: string) {
		return this.tasks?.filter(task => task.category === category)
	}

	getCompletedTasksByCategory(category: string) {
		return this.getTasksByCategory(category)?.filter(task => task.completed)
	}
}

export const taskStore = new ProjectTaskStore()