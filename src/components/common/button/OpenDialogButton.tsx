import {observer} from "mobx-react";
import {Button} from "./Button";
import {dialogStore, DialogType} from "../../../store/dialogStore";
import {ReactNode} from "react";
import {IDialogData} from "../../../interfaces/IDialogData";

type Props = {
	dialogType: DialogType,
	dialogData: IDialogData,
	children: ReactNode
}

export const OpenDialogButton = observer((props: Props) => {
	const {children, dialogType, dialogData} = props

	return (
		<Button onClick={() => dialogStore.open(dialogType, dialogData)}>
			{children}
		</Button>
	)
})