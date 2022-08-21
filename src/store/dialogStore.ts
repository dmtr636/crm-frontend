import {makeAutoObservable} from "mobx";
import {DialogActionType, IDialogAction, IDialogData} from "../interfaces/IDialogData";
import {IObjectStore} from "../interfaces/IObjectStore";

export enum DialogType {add, edit, confirm, successAdd, successEdit, successDelete}

export class DialogStore {
	isOpen = false
	type: DialogType = DialogType.add
	data?: IDialogData
	object?: object
	objectId?: string
	store?: IObjectStore

	open(type: DialogType, data: IDialogData, object?: object, objectId?: string) {
		this.type = type
		this.isOpen = true
		this.data = data
		this.object = object
		this.objectId = objectId
		this.store = data.store
	}

	close() {
		this.isOpen = false
	}

	validate() {
		let isValid = true
		this.data?.form?.fields.forEach(field => {
			if (field.value?.trim().length || !field.required) {
				field.validated = true
			} else {
				field.validated = false
				isValid = false
			}
		})
		return isValid
	}

	handleAction(action: IDialogAction) {
		switch (action.type) {
			case DialogActionType.add:
				if (this.validate()) {
					this.type = DialogType.successAdd
					this.store?.addFromDialog(this.data!)
				}
				break
			case DialogActionType.delete:
				if (this.type === DialogType.confirm) {
					this.store?.delete(this.objectId!)
					this.type = DialogType.successDelete
				} else {
					this.type = DialogType.confirm
				}
				break
			case DialogActionType.save:
				if (this.validate()) {
					this.type = DialogType.successEdit
					this.store?.editFromDialog(this.data!, this.objectId!)
				}
				break
			case DialogActionType.ok:
				this.close()
				break
			case DialogActionType.cancel:
				this.close()
				break
		}
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const dialogStore = new DialogStore()