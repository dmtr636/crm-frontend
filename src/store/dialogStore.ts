import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";

export type DialogType = "add" | "edit" | "confirm" | "success"

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

	constructor() {
		makeAutoObservable(this)
	}
}

export const dialogStore = new DialogStore()