import {ITabAction} from "../../interfaces/ITab";
import {Button} from "../common/button/Button";
import {IOpenDialogParamsRequestFields} from "../../store/dialogStore";
import {useStore} from "../../hooks/hooks";

type Props = {
	action: ITabAction,
	object: object,
	objectId: number,
	requestFields?: IOpenDialogParamsRequestFields,
}

export const ProjectHeaderAction = (props: Props) => {
	const {action, object, objectId, requestFields} = props
	const store = useStore()

	return (
		<Button
			onClick={() => action.onClick({
				object: object,
				objectId: objectId,
				requestFields: requestFields,
				store: store
			})}
		>
			{action.buttonText}
		</Button>
	)
}