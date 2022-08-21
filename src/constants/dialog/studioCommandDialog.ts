import {IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {memberObjectStore} from "../../store/objectStore";

export const studioCommandDialog: IDialogData = {
	title: {
		[DialogType.add]: "Добавить участника"
	},
	form: {
		columns: 2,
		fields: [
			{
				label: "Имя",
				name: "name",
				required: true
			},
			{
				label: "Роль в команде",
				name: "role",
				required: true
			},
			{
				label: "Почта",
				name: "email",
				required: true
			},
			{
				label: "Телефон",
				name: "phone",
				required: true
			},
			{
				label: "Пароль",
				name: "password",
				required: true
			},
			{
				label: "Ссылка на чат",
				name: "telegram",
				required: true
			}
		]
	},
	text: {
		template: {
			[DialogType.confirm]: "Вы удаляете следующего участника: {OBJECT}",
		},
		objectFieldName: "name"
	},
	store: memberObjectStore
}