import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {taskObjectStore} from "../../store/objectStore";
import {memberStore} from "../../store/memberStore";

export const projectTaskDialogData: IDialogData = {
	title: {
		[DialogType.add]: "Добавить задачу",
		[DialogType.successAdd]: "Успешно добавлена",
		[DialogType.successDelete]: "Успешно удалена",
		[DialogType.successEdit]: "Успешно изменена"
	},
	form: {
		columns: 2,
		fields: [
			{
				label: "Категория задачи",
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
				label: "Текст задачи",
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
				selectOptionsStore: memberStore
			},
		]
	},
	store: taskObjectStore,
	actions: {
		[DialogType.add]: [
			{
				label: "Создать",
				type: DialogActionType.add,
			},
		]
	},
	text: {
		template: {
			[DialogType.successAdd]: "Задача добавлена",
			[DialogType.successEdit]: "Задача изменена",
			[DialogType.successDelete]: "Задача удалена",
			[DialogType.confirm]: "Подтвердите удаление"
		},
		objectFieldName: "text"
	},
}