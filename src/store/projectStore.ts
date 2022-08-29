import {IProject} from "../interfaces/entities/IProject";
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

	getProjectById(id: number) {
		return this.projects?.find(project => project.id === id)
	}
}

export const projectStore = new ProjectStore()