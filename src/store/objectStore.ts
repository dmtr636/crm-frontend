import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import axios from "axios";
import {MEMBERS_ENDPOINT} from "../api/endoints";
import {createFieldsFromDialogData} from "../utils/utils";
import {IObjectStore} from "../interfaces/IObjectStore";
import {IMember} from "../interfaces/IMember";
import {IAccess} from "../interfaces/IAccess";

export interface IObjectType {
	id: string
}

class ObjectStore<ObjectType extends IObjectType> implements IObjectStore {
	object?: ObjectType
	objects?: ObjectType[]

	constructor() {
		makeAutoObservable(this)
	}

	fetchMembers() {
		axios.get(MEMBERS_ENDPOINT).then(res => {
			this.objects = res.data.result
		})
	}

	addFromDialog(data: IDialogData) {
		const fields = createFieldsFromDialogData(data)
		axios.post(MEMBERS_ENDPOINT, fields).then(res => {
			this.objects?.push(res.data.result)
		})
	}

	delete(id: string) {
		axios.delete(MEMBERS_ENDPOINT, {
			data: {
				id: id
			}
		})
		this.objects = this.objects?.filter(member => member.id !== id)
	}

	editFromDialog(data: IDialogData, id: string) {
		const fields = createFieldsFromDialogData(data)
		fields["id"] = id
		axios.patch(MEMBERS_ENDPOINT, fields).then(res => {
			let newMember = res.data.result
			this.objects = this.objects?.map(member =>
				member.id === newMember.id ? newMember : member
			)
		})
	}
}

export const memberObjectStore = new ObjectStore<IMember>()
export const accessObjectStore = new ObjectStore<IAccess>()