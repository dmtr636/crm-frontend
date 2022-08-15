import {IProject} from "../interfaces/IProject";
import {makeAutoObservable} from "mobx";
import {IHomeProject} from "../interfaces/IHomeProject";

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
		]
	}
]

class ProjectStore {
	projects: IProject[] = testProjects
	homeProjects: IHomeProject[] = testHomeProjects

	constructor() {
		makeAutoObservable(this)
	}

	search(query: string) {
		return this.projects.filter(project => project.name.toLowerCase().includes(query.toLowerCase()))
	}
}

export const projectStore = new ProjectStore()