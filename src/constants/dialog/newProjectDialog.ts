import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {projectObjectStore} from "../../store/objectStore";

export const newProjectDialog: IDialogData = {
	title: {
		[DialogType.add]: "Новый проект"
	},
	form: {
		columns: 2,
		fields: [
			{
				label: "Название",
				name: "name",
				required: true
			},
			{
				label: "Дедлайн сдачи",
				name: "deadline",
				required: true,
				type: "date"
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
	}
}