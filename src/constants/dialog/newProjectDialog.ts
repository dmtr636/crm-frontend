import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createNewProjectDialog = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Новый проект"
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
			]
		},
		store: store.projectObjectStore,
		actions: {
			[DialogType.add]: [
				{
					label: "Создать",
					type: DialogActionType.add,
				},
			]
		},
		text: {
			template: {
				[DialogType.successAdd]: "{OBJECT} добавлен",
			},
			objectFieldName: "name"
		},
	}
}