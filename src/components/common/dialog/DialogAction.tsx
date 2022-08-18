import {observer} from "mobx-react";
import {IDialogAction} from "../../../interfaces/IDialogData";
import {Button} from "../button/Button";
import {dialogStore} from "../../../store/dialogStore";

export const DialogAction = observer((props: {action: IDialogAction}) => {
	const action = props.action

	return (
		<>
			<Button onClick={() => dialogStore.handleAction(action)}>
				{action.label}
			</Button>
		</>
	)
})