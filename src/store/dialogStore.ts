import {makeAutoObservable} from "mobx";
import {IDialogAction, IDialogData} from "../interfaces/IDialogData";

export type DialogType = "add" | "edit" | "confirm" | "successAdd" | "successDelete"

export class DialogStore {
	isOpen = false
	type: DialogType = "add"
	data?: IDialogData

	open(type: DialogType, data: IDialogData) {
		this.type = type
		this.isOpen = true
		this.data = data
	}

	close() {
		this.isOpen = false
	}

	validate() {
		let isValid = true
		this.data?.form?.fields.forEach(field => {
			if (field.value?.trim().length) {
				field.validated = true
			} else {
				field.validated = false
				isValid = false
			}
		})
		return isValid
	}

	handleAction(action: IDialogAction) {
		if (action.type === "add") {
			if (this.validate()) {
				this.type = "successAdd"
				action.onClick(this.data!)
			}
		}
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const dialogStore = new DialogStore()