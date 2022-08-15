import {makeAutoObservable} from "mobx";
import {ITaskType} from "../interfaces/ITaskType";
import {taskTypes} from "../constants/taskTypes";

class TaskStore {
	taskType: ITaskType = taskTypes[0]

	constructor() {
		makeAutoObservable(this)
	}

	setType(taskType: ITaskType) {
		this.taskType = taskType
	}
}

export const taskStore = new TaskStore()