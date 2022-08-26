import {ITabOption} from "../interfaces/ITabOption";
import {dialogStore, DialogType} from "../store/dialogStore";
import {editProjectDialog} from "./dialog/editProjectDialog";
import {addTaskDialog} from "./dialog/addTaskDialog";

export const projectTabs: ITabOption[] = [
	{
		id: "tasks",
		value: "Задачи",
		actions: [
			{
				buttonText: "Редактировать проект",
				onClick: params => dialogStore.open(DialogType.add, editProjectDialog, params.object, params.objectId)
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
		]
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