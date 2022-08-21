import {IDialogData} from "./IDialogData";

export interface IObjectStore {
	addFromDialog: (data: IDialogData) => void
	editFromDialog: (data: IDialogData, id: string) => void
	delete: (id: string) => void
}