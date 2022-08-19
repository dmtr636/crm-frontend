import {IDialogData} from "../../interfaces/IDialogData";
import {memberStore} from "../../store/memberStore";

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
	},
	text: {
		successAdd: "{OBJECT} добавлен",
		successAddObjectFieldName: "name"
	},
	actions: [
		{
			label: "Добавить",
			type: "add",
			onClick: data => memberStore.addMemberFromDialog(data)
		}
	]
}