import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectAccessListItem} from "./ProjectAccessListItem";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
    margin-top: 48px;
`

export const ProjectAccess = observer(() => {
	const store = useStore()

	return (
		<Container>
			{store.projectAccessObjectStore.objects?.map(access =>
				<ProjectAccessListItem access={access}/>
			)}
		</Container>
	)
})