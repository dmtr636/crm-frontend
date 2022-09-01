import {AppStore} from "../../store/AppStore";
import {IDialogData} from "../../interfaces/IDialogData";
import {DialogType} from "../../store/dialogStore";
import {UploadPhotoDialog} from "../../components/common/dialog/UploadPhotoDialog";

export const createUploadPhotoDialogData = (store: AppStore): IDialogData => {
	return {
		title: {
			[DialogType.add]: "Загрузка фото",
			[DialogType.edit]: "Редактировать"
		},
		component: <UploadPhotoDialog />
	}
}