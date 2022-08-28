import {DialogActionType, IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {AppStore} from "../../store/AppStore";

export const createProjectMemberDialog = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Добавить в команду",
			[DialogType.successAdd]: "Успешно добавлен",
		},
		form: {
			columns: 2,
			fields: [
				{
					name: "member_id",
					type: "select_member",
					columns: 2,
				},
			]
		},
		store: store.projectMemberObjectStore,
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
				[DialogType.successAdd]: "Участник добавлен",
			},
			objectFieldName: "text"
		},
	}
}