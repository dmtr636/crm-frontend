import {observer} from "mobx-react";
import {DialogActionType, IDialogAction} from "../../../interfaces/IDialogData";
import {Button} from "../button/Button";
import {dialogStore} from "../../../store/dialogStore";

export const DialogAction = observer((props: {action: IDialogAction}) => {
	const action = props.action

	const getButtonColor = () => {
		if (action.type === DialogActionType.delete) {
			return "red"
		} else {
			return "dark"
		}
	}

	return (
		<>
			<Button onClick={() => dialogStore.handleAction(action)} color={getButtonColor()}>
				{action.label}
			</Button>
		</>
	)
})