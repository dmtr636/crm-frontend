import {observer} from "mobx-react";
import styled from "styled-components";
import {operationsObjectStore} from "../../store/objectStore";
import {StudioOperationsListItem} from "./StudioOperationsListItem";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioMoney = observer(() => {
	const operations = operationsObjectStore.objects

	return (
		<Container>
			{operations?.map(operation =>
				<StudioOperationsListItem operation={operation} />
			)}
		</Container>
	)
})