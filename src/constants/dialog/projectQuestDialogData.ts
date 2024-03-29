import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createProjectQuestDialogData = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Добавить квест",
			[DialogType.successAdd]: "Успешно добавлен",
			[DialogType.successDelete]: "Успешно удалён",
			[DialogType.successEdit]: "Успешно изменён"
		},
		form: {
			columns: 2,
			fields: [
				{
					label: "Категория квеста",
					name: "category",
					type: "select",
					required: true,
					selectOptions: [
						{
							id: "design",
							value: "Дизайн"
						},
						{
							id: "development",
							value: "Разработка"
						},
						{
							id: "marketing",
							value: "Маркетинг"
						},
						{
							id: "ceo",
							value: "СЕО"
						},
					],
					tabStore: "projectTasksTabStore"
				},
				{
					label: "Дедлайн сдачи",
					name: "deadline",
					required: true,
					type: "date"
				},
				{
					label: "Текст квеста",
					name: "text",
					required: true,
					type: "text",
					columns: 2
				},
				{
					label: "Исполнитель",
					name: "executor_id",
					type: "select",
					required: true,
					selectOptionsStore: store.memberStore
				},
			]
		},
		store: store.taskObjectStore,
		actions: {
			[DialogType.add]: [
				{
					label: "Добавить",
					type: DialogActionType.add,
				},
			]
		},
		text: {
			template: {
				[DialogType.successAdd]: "Квест добавлен",
				[DialogType.successEdit]: "Квест изменён",
				[DialogType.successDelete]: "Квест удалён",
				[DialogType.confirm]: "Подтвердите удаление"
			},
			objectFieldName: "text"
		},
	}
}