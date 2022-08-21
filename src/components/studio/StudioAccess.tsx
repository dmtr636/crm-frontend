import {observer} from "mobx-react";
import styled from "styled-components";
import {accessObjectStore} from "../../store/objectStore";
import {StudioAccessListItem} from "./StudioAccessListItem";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioAccess = observer(() => {
	return (
		<Container>
			{accessObjectStore.objects?.map(access =>
				<StudioAccessListItem access={access} />
			)}
		</Container>
	)
})