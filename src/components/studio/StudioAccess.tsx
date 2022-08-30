import {observer} from "mobx-react";
import styled from "styled-components";
import {StudioAccessListItem} from "./StudioAccessListItem";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioAccess = observer(() => {
	const store = useStore()

	return (
		<Container>
			{store.accessObjectStore.objects?.map(access =>
				<StudioAccessListItem access={access} />
			)}
		</Container>
	)
})