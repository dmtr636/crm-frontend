import {IProject} from "../interfaces/IProject";
import {makeAutoObservable} from "mobx";

const testProjects = [
	{
		id: 1,
		name: "Кафе Гурман"
	},
	{
		id: 2,
		name: "Быстрый грузовой"
	},
	{
		id: 3,
		name: "Kodim.Space"
	},
	{
		id: 4,
		name: "Kodim.Studio"
	},
	{
		id: 5,
		name: "Starosta.pro"
	},
]

class ProjectStore {
	projects: IProject[] = testProjects

	constructor() {
		makeAutoObservable(this)
	}

	search(query: string) {
		return this.projects.filter(project => project.name.toLowerCase().includes(query.toLowerCase()))
	}
}

export const projectStore = new ProjectStore()