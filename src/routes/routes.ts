import {IRoute} from "../interfaces/IRoute";
import {HomePage} from "../pages/HomePage";
import sidebarHome from "assets/sidebarHome.svg"

export const sidebarRoutes: IRoute[] = [
	{
		path: "/",
		component: HomePage,
		icon: sidebarHome
	}
]