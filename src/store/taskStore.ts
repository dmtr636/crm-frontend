import {makeAutoObservable} from "mobx";
import {ITask} from "../interfaces/entities/ITask";
import {memberStore} from "./memberStore";
import axios from "axios";
import {TASKS_ENDPOINT} from "../api/endoints";
import _ from "lodash";

export class TaskStore {
	tasks: ITask[] = []

	constructor() {
		makeAutoObservable(this)
	}

	fetchTasks() {
		const filter = {"executor_id": memberStore.member?.id}
		axios.get(TASKS_ENDPOINT, {
			params: {
				filter: filter
			}
		}).then(res => this.tasks = res.data.result)
	}

	get groupedTasks() {
		return _.groupBy(
			this.tasks,
			(task: ITask) => task.project_id
		)
	}
}