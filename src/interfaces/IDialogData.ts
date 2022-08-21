import { DialogType } from "store/dialogStore";
import {IObjectStore} from "./IObjectStore";

type IDialogTitle = {
	[key in DialogType]?: string;
};

export interface IDialogField {
	label: string,
	name: string,
	columns?: number,
	value?: string,
	validated?: boolean
}

type IDialogTextTemplate = {
	[key in DialogType]?: string
}

export interface IDialogText {
	template?: IDialogTextTemplate
	objectFieldName?: string
}

export enum DialogActionType {save, add, delete, ok, cancel}

export interface IDialogAction {
	type: DialogActionType,
	label: string,
	onClick?: (data?: any, id?: string) => void
}

export type DialogDataAction = {
	[key in DialogType]: IDialogAction[]
}

export interface IDialogData {
	title?: IDialogTitle,
	text?: IDialogText,
	form?: {
		columns: number,
		fields: IDialogField[]
	},
	actions?: DialogDataAction,
	store?: IObjectStore
}