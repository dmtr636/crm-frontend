import {IDialogData} from "./IDialogData";

export interface IObjectStore {
	addFromDialog: (data: IDialogData, args?: object) => void
	editFromDialog: (data: IDialogData, id: number) => void
	delete: (id: number) => void
}