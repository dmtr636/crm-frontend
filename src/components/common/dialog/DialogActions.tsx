import {observer} from "mobx-react";
import styled from "styled-components";
import {dialogStore} from "../../../store/dialogStore";
import {DialogAction} from "./DialogAction";
import {defaultDialog} from "../../../constants/dialog/defaultDialog";

const Container = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	column-gap: 26px;
	margin-top: 48px;
`

const getActions = () => {
	const actions = dialogStore.data?.actions
	const defaultActions = defaultDialog.actions
	if (actions && actions[dialogStore.type]) {
		return actions[dialogStore.type]
	}
	if (defaultActions) {
		return defaultActions[dialogStore.type]
	}
}

export const DialogActions = observer(() => {

	return (
		<Container>
			{getActions()?.map(action =>
				<DialogAction action={action} key={action.label} />
			)}
		</Container>
	)
})