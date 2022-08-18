import {IRoute} from "../interfaces/IRoute";
import {HomePage} from "../pages/main/HomePage";
import sidebarHome from "assets/sidebar/sidebarHome.svg"
import sidebarProjects from "assets/sidebar/sidebarProjects.svg"
import sidebarStudio from "assets/sidebar/sidebarStudio.svg"
import {ProjectsPage} from "../pages/main/ProjectsPage";
import {StudioPage} from "../pages/main/StudioPage";

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
	},
	{
		path: "/studio",
		component: <StudioPage />,
		icon: sidebarStudio
	}
]