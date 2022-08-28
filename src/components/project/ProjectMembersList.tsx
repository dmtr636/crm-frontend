import {observer} from "mobx-react";
import styled from "styled-components";
import {useStore} from "../../hooks/hooks";
import {ProjectMembersListItem} from "./ProjectMembersListItem";

const Container = styled.div`
    margin-top: 48px;
`

export const ProjectMembersList = observer(() => {
	const store = useStore()

	return (
		<Container>
			{store.projectMemberObjectStore.objects?.map(member =>
				<ProjectMembersListItem projectMember={member} key={member.id}/>
			)}
		</Container>
	)
})