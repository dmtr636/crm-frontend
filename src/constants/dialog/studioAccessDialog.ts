import {IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createStudioAccessDialog = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Добавить доступ"
		},
		form: {
			columns: 2,
			fields: [
				{
					label: "Ссылка",
					name: "link",
					required: true
				},
				{
					label: "PIN",
					name: "pin"
				},
				{
					label: "Почта",
					name: "email"
				},
				{
					label: "API",
					name: "api"
				},
				{
					label: "Пароль",
					name: "password"
				},
			]
		},
		text: {
			template: {
				[DialogType.confirm]: "Вы удаляете доступ: {OBJECT}",
			},
			objectFieldName: "link"
		},
		store: store.accessObjectStore
	}
}