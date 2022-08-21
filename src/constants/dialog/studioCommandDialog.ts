import {IDialogData} from "../../interfaces/IDialogData";
import {memberStore} from "../../store/memberStore";
import {DialogType} from "../../store/dialogStore";

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
			},
			{
				label: "Роль в команде",
				name: "role"
			},
			{
				label: "Почта",
				name: "email"
			},
			{
				label: "Телефон",
				name: "phone"
			},
			{
				label: "Пароль",
				name: "password"
			},
			{
				label: "Ссылка на чат",
				name: "telegram"
			}
		]
	},
	text: {
		template: {
			[DialogType.confirm]: "Вы удаляете следующего участника: {OBJECT}",
		},
		objectFieldName: "name"
	},
	store: memberStore
}