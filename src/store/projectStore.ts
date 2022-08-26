import {IProject} from "../interfaces/IProject";
import {makeAutoObservable} from "mobx";
import {IHomeProject} from "../interfaces/IHomeProject";
import {projectObjectStore} from "./objectStore";

class ProjectStore {
	homeProjects: IHomeProject[] = []

	constructor() {
		makeAutoObservable(this)
	}

	get projects() {
		return projectObjectStore.objects
	}

	filterByCategory(category: string) {
		return this.projects?.filter(project => project.category === category)
	}

	search(query: string) {
		return this.projects?.filter(project => project.name.toLowerCase().includes(query.toLowerCase()))
	}
}

export const projectStore = new ProjectStore()