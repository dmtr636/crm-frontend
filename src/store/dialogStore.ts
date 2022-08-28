import {makeAutoObservable} from "mobx";
import {DialogActionType, IDialogAction, IDialogData} from "../interfaces/IDialogData";
import {IObjectStore} from "../interfaces/IObjectStore";
import {AppStore} from "./AppStore";

export enum DialogType {add, edit, confirm, successAdd, successEdit, successDelete}

export type IOpenDialogParamsRequestFields = {
	[key: string]: string | number
}

export interface IOpenDialogParams {
	type?: DialogType,
	data?: IDialogData,
	object?: object,
	objectId?: number,
	requestFields?: IOpenDialogParamsRequestFields,
	store?: AppStore
}

export class DialogStore {
	isOpen = false
	type: DialogType = DialogType.add
	data?: IDialogData
	object?: object
	objectId?: number
	store?: IObjectStore
	requestFields?: IOpenDialogParamsRequestFields

	open(type: DialogType, data: IDialogData, object?: object, objectId?: number) {
		this.type = type
		this.isOpen = true
		this.data = data
		this.object = object
		this.objectId = objectId
		this.store = data.store
	}

	openV2(params: IOpenDialogParams) {
		this.type = params.type!
		this.isOpen = true
		this.data = params.data
		this.object = params.object
		this.objectId = params.objectId
		this.store = params.data?.store
		this.requestFields = params.requestFields
	}

	close() {
		this.isOpen = false
	}

	validate() {
		let isValid = true
		this.data?.form?.fields.forEach(field => {
			switch (field.type) {
				case "date":
				case "number":
					if ((field.required && field.value?.length === 0) || isNaN(Number(field.value))) {
						field.validated = false
						isValid = false
					} else {
						field.validated = true
					}
					break
				case "select_member":
					if (field.value) {
						field.validated = true
					} else {
						isValid = false
					}
					break
				default:
					if (field.value?.toString().trim().length || !field.required) {
						field.validated = true
					} else {
						field.validated = false
						isValid = false
					}
			}
		})
		return isValid
	}

	handleAction(action: IDialogAction) {
		switch (action.type) {
			case DialogActionType.add:
				if (this.validate()) {
					this.type = DialogType.successAdd
					this.store?.addFromDialog(
						this.data!,
						{...action.args, ...this.requestFields}
					)
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
					this.store?.editFromDialog(this.data!, this.objectId!, {...this.requestFields})
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