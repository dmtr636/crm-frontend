import {ReactNode} from "react";
import {IOpenDialogParams} from "../store/dialogStore";

export interface ITabAction {
	buttonText: string,
	onClick: (params: IOpenDialogParams) => void
}

export interface ITab {
	id: string,
	value?: string,
	title?: string,
	component?: ReactNode,
	actionButtonText?: string,
	actions?: ITabAction[]
}