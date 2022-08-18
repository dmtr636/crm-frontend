import {IDialogData} from "../../interfaces/IDialogData";

export const studioCommandDialog: IDialogData = {
	title: {
		add: "Добавить участника"
	},
	form: {
		columns: 2,
		fields: [
			{
				label: "Имя",
				name: "name"
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
	}
}