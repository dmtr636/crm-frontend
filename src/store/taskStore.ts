import {makeAutoObservable} from "mobx";
import {taskObjectStore} from "./objectStore";

class TaskStore {

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

	get designTasks() {
		return this.tasks?.filter(task => task.category === "design")
	}

	get completedDesignTasks() {
		return this.designTasks?.filter(task => task.completed)
	}

	get developmentTasks() {
		return this.tasks?.filter(task => task.category === "development")
	}

	get completedDevelopmentTasks() {
		return this.developmentTasks?.filter(task => task.completed)
	}

	get marketingTasks() {
		return this.tasks?.filter(task => task.category === "marketing")
	}

	get completedMarketingTasks() {
		return this.marketingTasks?.filter(task => task.completed)
	}

	get ceoTasks() {
		return this.tasks?.filter(task => task.category === "ceo")
	}

	get completedCeoTasks() {
		return this.ceoTasks?.filter(task => task.completed)
	}
}

export const taskStore = new TaskStore()