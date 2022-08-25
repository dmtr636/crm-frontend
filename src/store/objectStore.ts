import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import axios from "axios";
import {ACCESSES_ENDPOINT, MEMBERS_ENDPOINT, OPERATIONS_ENDPOINT, PROJECTS_ENDPOINT} from "../api/endoints";
import {createFieldsFromDialogData} from "../utils/utils";
import {IObjectStore} from "../interfaces/IObjectStore";
import {IMember} from "../interfaces/IMember";
import {IAccess} from "../interfaces/IAccess";
import {IOperation} from "../interfaces/IOperation";
import {IProject} from "../interfaces/IProject";

export interface IObjectType {
	id: number
}

class ObjectStore<ObjectType extends IObjectType> implements IObjectStore {
	object?: ObjectType
	objects?: ObjectType[]
	endpoint: string

	constructor(endpoint: string) {
		this.endpoint = endpoint
		makeAutoObservable(this)
	}

	fetch() {
		axios.get(this.endpoint).then(res => {
			this.objects = res.data.result
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
	}

	editFromDialog(data: IDialogData, id: number) {
		const fields = createFieldsFromDialogData(data)
		fields["id"] = id
		axios.patch(this.endpoint, fields).then(res => {
			let newMember = res.data.result
			this.objects = this.objects?.map(member =>
				member.id === newMember.id ? newMember : member
			)
		})
	}
}

export const memberObjectStore = new ObjectStore<IMember>(MEMBERS_ENDPOINT)
export const accessObjectStore = new ObjectStore<IAccess>(ACCESSES_ENDPOINT)
export const operationsObjectStore = new ObjectStore<IOperation>(OPERATIONS_ENDPOINT)
export const projectObjectStore = new ObjectStore<IProject>(PROJECTS_ENDPOINT)