import {IRoute} from "../interfaces/IRoute";
import {HomePage} from "../pages/HomePage";
import sidebarHome from "assets/sidebarHome.svg"
import sidebarProjects from "assets/sidebarProjects.svg"
import {ProjectsPage} from "../pages/ProjectsPage";

export const sidebarRoutes: IRoute[] = [
	{
		path: "/",
		component: <HomePage/>,
		icon: sidebarHome,
		index: true
	},
	{
		path: "/projects",
		component: <ProjectsPage/>,
		icon: sidebarProjects
	}
]