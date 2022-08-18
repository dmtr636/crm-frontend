import {makeAutoObservable} from "mobx";
import {IDialogData} from "../interfaces/IDialogData";
import {dialogStore} from "./dialogStore";

class MemberStore {
	constructor() {
		makeAutoObservable(this)
	}

	addMemberFromDialog(data: IDialogData) {
		console.log(data)
		dialogStore.close()
	}
}

export const memberStore = new MemberStore()