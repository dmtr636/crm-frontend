import {DialogType} from "store/dialogStore";
import {IObjectStore} from "./IObjectStore";
import {ISelectOptionsStore} from "./ISelectOptionsStore";
import {TabStore} from "../store/tabStore";
import {ReactNode} from "react";

type IDialogTitle = {
	[key in DialogType]?: string;
};

export type DialogFieldType = "text" | "date" | "number" | "select" | "string" | "select_member"

export interface ISelectOption {
	id: string,
	value?: string
}

export interface IDialogField {
	label?: string,
	name: string,
	columns?: number,
	value?: string,
	validated?: boolean,
	required?: boolean,
	type?: DialogFieldType,
	selectOptions?: ISelectOption[],
	edited?: boolean,
	selectOptionsStore?: ISelectOptionsStore,
	tabStore?: string
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
	onClick?: (data?: any, id?: string) => void,
	args?: object
}

export type DialogDataAction = {
	[key in DialogType]?: IDialogAction[]
}

export interface IDialogData {
	title?: IDialogTitle,
	text?: IDialogText,
	form?: {
		columns: number,
		fields: IDialogField[]
	},
	actions?: DialogDataAction,
	store?: IObjectStore,
	component?: ReactNode
}