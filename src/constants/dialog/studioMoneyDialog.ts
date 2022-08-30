import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createStudioMoneyDialog = (store: AppStore): IDialogData => {
	return {
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
					required: true,
					type: "date"
				},
				{
					label: "Сумма",
					name: "amount",
					required: true,
					type: "number"
				},
			]
		},
		text: {
			template: {
				[DialogType.confirm]: "Вы удаляете операцию: {OBJECT}",
			},
			objectFieldName: "purpose"
		},
		store: store.operationsObjectStore,
		actions: {
			[DialogType.add]: [
				{
					label: "Доход",
					type: DialogActionType.add,
					args: {
						type: "income"
					}
				},
				{
					label: "Расход",
					type: DialogActionType.add,
					args: {
						type: "expense"
					}
				}
			]
		}
	}
}