import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import axios from "axios";
import {
	ACCESSES_ENDPOINT,
	MEMBERS_ENDPOINT,
	OPERATIONS_ENDPOINT,
	PROJECTS_ENDPOINT,
	TASKS_ENDPOINT
} from "../api/endoints";
import {createFieldsFromDialogData} from "../utils/utils";
import {IObjectStore} from "../interfaces/IObjectStore";
import {IMember} from "../interfaces/entities/IMember";
import {IAccess} from "../interfaces/entities/IAccess";
import {IOperation} from "../interfaces/entities/IOperation";
import {IProject} from "../interfaces/entities/IProject";
import {ITask} from "../interfaces/entities/ITask";
import {AppStore} from "./AppStore";

export interface IObjectType {
	id: number
}

export class ObjectStore<ObjectType extends IObjectType> implements IObjectStore {
	object?: ObjectType
	objects?: ObjectType[]
	endpoint: string
	filter?: object
	isReady = false
	appStore: AppStore

	constructor(endpoint: string, store: AppStore) {
		this.endpoint = endpoint
		this.appStore = store

		makeAutoObservable(this)
	}

	setFilter = (filter: object) => {
		this.isReady = false
		this.filter = filter
	};

	fetchObjects() {
		axios.get(this.endpoint, {
			params: {
				filter: this.filter
			}
		}).then(res => {
			this.objects = res.data.result
			this.isReady = true
		})
	}

	addFromDialog(data: IDialogData, args?: object) {
		const fields = createFieldsFromDialogData(data)
		if (args) {
			Object.entries(args).forEach(([key, value]) => {
				fields[key] = value
			})
		}
		axios.post(this.endpoint, fields).then(res => {
			this.objects?.push(res.data.result)
		})
	}

	delete(id: number) {
		axios.delete(this.endpoint, {
			data: {
				id: id
			}
		})
		this.objects = this.objects?.filter(member => member.id !== id)
		if (this.endpoint === TASKS_ENDPOINT) {
			this.appStore.taskStore.tasks.filter(task => task.id !== id)
		}
	}

	editFromDialog(data: IDialogData, id: number, args?: object) {
		const fields = createFieldsFromDialogData(data)
		fields["id"] = id
		if (args) {
			Object.entries(args).forEach(([key, value]) => {
				fields[key] = value
			})
		}
		axios.patch(this.endpoint, fields).then(res => {
			let newObject = res.data.result
			this.objects = this.objects?.map(object =>
				object.id === newObject.id ? newObject : object
			)
			if (this.endpoint === TASKS_ENDPOINT) {
				this.appStore.taskStore.tasks.map(task =>
					task.id === newObject.id ? newObject : task
				)
			}
		})
	}

	findById(id: number) {
		return this.objects?.find(object => object.id === id)
	}
}