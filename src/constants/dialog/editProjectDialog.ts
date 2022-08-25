import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {projectObjectStore} from "../../store/objectStore";
import {projectListTabs} from "../projectListTabs";

export const editProjectDialog: IDialogData = {
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
	store: projectObjectStore,
	actions: {
		[DialogType.edit]: [
			{
				label: "Сохранить",
				type: DialogActionType.save,
			},
		]
	}
}