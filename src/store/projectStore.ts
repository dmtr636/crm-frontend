import {makeAutoObservable} from "mobx";
import {IHomeProject} from "../interfaces/IHomeProject";
import {AppStore} from "./AppStore";

export class ProjectStore {
	appStore: AppStore
	homeProjects: IHomeProject[] = []

	constructor(store: AppStore) {
		this.appStore = store

		makeAutoObservable(this)
	}

	get projects() {
		return this.appStore.projectObjectStore.objects
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