import {observer} from "mobx-react";
import styled from "styled-components";
import {dialogStore} from "../../../store/dialogStore";
import {DialogAction} from "./DialogAction";

const Container = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	column-gap: 26px;
	margin-top: 48px;
`

export const DialogActions = observer(() => {
	return (
		<Container>
			{dialogStore.data?.actions?.map(action =>
				<DialogAction action={action} key={action.label} />
			)}
		</Container>
	)
})