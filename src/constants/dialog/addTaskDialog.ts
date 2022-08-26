import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {projectObjectStore} from "../../store/objectStore";
import {memberStore} from "../../store/memberStore";

export const addTaskDialog: IDialogData = {
	title: {
		[DialogType.add]: "Добавить задачу"
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
				]
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
				name: "executorId",
				type: "select",
				required: true,
				selectOptionsStore: memberStore
			},
		]
	},
	store: projectObjectStore,
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
			[DialogType.successAdd]: "{OBJECT} добавлен",
		},
		objectFieldName: "name"
	},
}