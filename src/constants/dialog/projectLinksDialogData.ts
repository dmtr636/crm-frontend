import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createProjectLinksDialogData = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.edit]: "Ссылки",
			[DialogType.successEdit]: "Успешно изменены"
		},
		form: {
			columns: 2,
			fields: [
				{
					label: "Сайт",
					name: "site",
				},
				{
					label: "MIRO",
					name: "miro",
				},
				{
					label: "Файлы",
					name: "files",
				},
				{
					label: "Прошлый сайт",
					name: "old_site",
				},
				{
					label: "FIGMA",
					name: "figma",
				},
				{
					label: "GitHub",
					name: "github",
				},
			]
		},
		store: store.projectLinksObjectStore,
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
				[DialogType.successEdit]: "Ссылки изменены",
			},
			objectFieldName: "text"
		},
	}
}