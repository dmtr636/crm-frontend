import {ITab} from "../interfaces/ITab";
import {dialogStore, DialogType} from "../store/dialogStore";
import {editProjectDialog} from "./dialog/editProjectDialog";
import {addTaskDialog} from "./dialog/addTaskDialog";
import {ProjectTasks} from "../components/project/ProjectTasks";

export const projectTabs: ITab[] = [
	{
		id: "tasks",
		value: "Задачи",
		actions: [
			{
				buttonText: "Редактировать проект",
				onClick: params => dialogStore.open(DialogType.edit, editProjectDialog, params.object, params.objectId)
			},
			{
				buttonText: "Добавить задачу",
				onClick: params => dialogStore.openV2({
					type: DialogType.add,
					data: addTaskDialog,
					requestFields: params.requestFields
				})
			},
			{
				buttonText: "Добавить квест",
				onClick: params => {}
			}
		],
		component: <ProjectTasks />
	},
	{
		id: "accesses",
		value: "Доступы",
		actions: [
			{
				buttonText: "Редактировать проект",
				onClick: params => dialogStore.open(DialogType.edit, editProjectDialog, params.object, params.objectId)
			},
		]
	},
	{
		id: "links",
		value: "Ссылки",
		actions: [
			{
				buttonText: "Редактировать проект",
				onClick: params => dialogStore.open(DialogType.edit, editProjectDialog, params.object, params.objectId)
			},
		]
	},
	{
		id: "team",
		value: "Команда",
		actions: [
			{
				buttonText: "Редактировать проект",
				onClick: params => dialogStore.open(DialogType.edit, editProjectDialog, params.object, params.objectId)
			},
		]
	}
]