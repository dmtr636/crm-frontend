import {makeAutoObservable} from "mobx";
import {ITask} from "../interfaces/entities/ITask";
import axios from "axios";
import {GROUPED_TASKS_ENDPOINT, TASKS_ENDPOINT} from "../api/endoints";
import {AppStore} from "./AppStore";
import {ITaskGroup} from "../interfaces/entities/ITaskGroup";

export class TaskStore {
	tasks: ITask[] = []
	groupedTasks: ITaskGroup[] = []
	isReady = false
	appStore: AppStore

	constructor(store: AppStore) {
		this.appStore = store

		makeAutoObservable(this)
	}

	fetchTasks() {
		const filter = {
			"executor_id": this.appStore.memberStore.member?.id,
			"project__category": "in_work"
		}
		axios.get(TASKS_ENDPOINT, {
			params: {
				filter: filter
			}
		}).then(res => {
			this.tasks = res.data.result
			//this.isReady = true
		})
	}

	fetchGroupedTasks() {
		const filter = {
			"executor_id": this.appStore.memberStore.member?.id
		}
		axios.get(GROUPED_TASKS_ENDPOINT, {
			params: {
				filter: filter
			}
		}).then(res => {
			this.groupedTasks = res.data.result
			this.isReady = true
		})
	}

	updateTask(task: ITask) {
		task.completed = !task.completed
		axios.patch(TASKS_ENDPOINT, task).then(res => {
			let newTask = res.data.result
			this.tasks = this.tasks?.map(task =>
				task.id === newTask.id ? newTask : task
			)
		})
	}
}