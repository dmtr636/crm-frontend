import {IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {operationsObjectStore} from "../../store/objectStore";

export const studioMoneyDialog: IDialogData = {
	title: {
		[DialogType.add]: "Добавить операцию"
	},
	form: {
		columns: 3,
		fields: [
			{
				label: "Назначение",
				name: "purpose",
				required: true
			},
			{
				label: "Дата",
				name: "date",
				required: true
			},
			{
				label: "Сумма",
				name: "amount",
				required: true
			},
		]
	},
	text: {
		template: {
			[DialogType.confirm]: "Вы удаляете операцию: {OBJECT}",
		},
		objectFieldName: "purpose"
	},
	store: operationsObjectStore
}