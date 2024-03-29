import {ReactNode} from "react";

export interface IRoute {
	path: string,
	component: ReactNode,
	icon: string,
	index?: boolean,
}