import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";

export const defaultDialog: IDialogData = {
	title: {
		[DialogType.add]: "Добавить",
		[DialogType.edit]: "Редактировать",
		[DialogType.successDelete]: "Успешно удалён",
		[DialogType.successAdd]: "Успешно добавлен",
		[DialogType.successEdit]: "Успешно изменён",
		[DialogType.confirm]: "Подтвердить удаление"
	},
	text: {
		template: {
			[DialogType.successAdd]: "{OBJECT} добавлен",
			[DialogType.successDelete]: "{OBJECT} удалён",
			[DialogType.successEdit]: "{OBJECT} изменён",
			[DialogType.confirm]: "Вы удаляете следующего участника: {OBJECT}",
		},
		objectFieldName: "name"
	},
	actions: {
		[DialogType.add]: [
			{
				label: "Добавить",
				type: DialogActionType.add,
			}
		],
		[DialogType.edit]: [
			{
				label: "Сохранить",
				type: DialogActionType.save,
			},
			{
				label: "Удалить",
				type: DialogActionType.delete,
			}
		],
		[DialogType.successAdd]: [
			{
				label: "ОК",
				type: DialogActionType.ok
			}
		],
		[DialogType.successDelete]: [
			{
				label: "ОК",
				type: DialogActionType.ok
			}
		],
		[DialogType.successEdit]: [
			{
				label: "ОК",
				type: DialogActionType.ok
			}
		],
		[DialogType.confirm]: [
			{
				label: "Отмена",
				type: DialogActionType.cancel
			},
			{
				label: "Удалить",
				type: DialogActionType.delete
			}
		]
	},
}