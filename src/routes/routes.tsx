import {IRoute} from "../interfaces/IRoute";
import {HomePage} from "../pages/HomePage";
import sidebarHome from "assets/sidebar/sidebarHome.svg"
import sidebarProjects from "assets/sidebar/sidebarProjects.svg"
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