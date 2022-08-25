import {IProject} from "../interfaces/IProject";
import {makeAutoObservable} from "mobx";
import {IHomeProject} from "../interfaces/IHomeProject";
import {projectObjectStore} from "./objectStore";

const testProjects: any = [

]

const testHomeProjects: IHomeProject[] = [
	{
		project_id: 1,
		project_name: "Кафе Гурман",
		date_ts: 1660483423,
		type: "my_project",
		tasks_filter: "all",
		tasks: [
			{
				id: 1,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 2,
				text: "Сделать црм до захода солнца",
				completed: false
			},
			{
				id: 3,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 4,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 5,
				text: "Сделать црм до захода солнца",
				completed: false
			},
			{
				id: 6,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 7,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 8,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 9,
				text: "Сделать црм до захода солнца",
				completed: false
			},
			{
				id: 10,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 11,
				text: "Сделать црм до захода солнца",
				completed: false
			},
			{
				id: 12,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 13,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 14,
				text: "Сделать црм до захода солнца",
				completed: false
			},
			{
				id: 15,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 16,
				text: "Сделать црм до захода солнца или вообще что это такое",
				completed: false
			},
			{
				id: 17,
				text: "А тут для демонстрации будет овер огромный текст со своими приколами",
				completed: false
			},
			{
				id: 18,
				text: "Сделать црм до захода солнца",
				completed: false
			},
		]
	}
]

class ProjectStore {
	homeProjects: IHomeProject[] = testHomeProjects

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