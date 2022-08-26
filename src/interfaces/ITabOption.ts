import {ReactNode} from "react";
import {IOpenDialogParams} from "../store/dialogStore";

export interface ITabAction {
	buttonText: string,
	onClick: (params: IOpenDialogParams) => void
}

export interface ITabOption {
	id: string,
	value: string,
	component?: ReactNode,
	actionButtonText?: string,
	actions?: ITabAction[]
}