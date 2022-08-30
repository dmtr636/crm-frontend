import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {projectListTabs} from "../projectListTabs";
import {AppStore} from "../../store/AppStore";

export const createEditProjectDialog = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.edit]: "Редактировать проект"
		},
		form: {
			columns: 2,
			fields: [
				{
					label: "Название",
					name: "name",
					required: true
				},
				{
					label: "Дедлайн сдачи",
					name: "deadline",
					required: true,
					type: "date"
				},
				{
					label: "Категория проекта",
					name: "category",
					required: true,
					type: "select",
					selectOptions: projectListTabs
				}
			]
		},
		store: store.projectObjectStore,
		actions: {
			[DialogType.edit]: [
				{
					label: "Сохранить",
					type: DialogActionType.save,
				},
			]
		}
	}
}