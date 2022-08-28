import {IDialogData} from "./IDialogData";
import {IObjectType} from "../store/objectStore";

export interface IObjectStore {
	objects?: object[]
	addFromDialog: (data: IDialogData, args?: object) => void
	editFromDialog: (data: IDialogData, id: number, args: object) => void
	delete: (id: number) => void
	findById: (id: number) => IObjectType | undefined
	setFilter: (filter: object) => void
}