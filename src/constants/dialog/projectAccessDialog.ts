import {IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createProjectAccessDialogData = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Добавить доступ"
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
					label: "Логин",
					name: "login"
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
				{
					label: "Ссылка",
					name: "link",
					required: true
				},
			]
		},
		text: {
			template: {
				[DialogType.confirm]: "Вы удаляете доступ: {OBJECT}",
			},
			objectFieldName: "name"
		},
		store: store.projectAccessObjectStore
	}
}