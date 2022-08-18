import {ReactNode} from "react";

export interface ITabOption {
	id: string,
	value: string,
	component?: ReactNode
}