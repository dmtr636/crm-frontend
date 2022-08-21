import {observer} from "mobx-react";
import styled from "styled-components";
import {memberObjectStore} from "../../store/objectStore";
import {StudioCommandMember} from "./StudioCommandMember";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioCommand = observer(() => {
	const members = memberObjectStore.objects

	return (
		<Container>
			{members?.map(member =>
				<StudioCommandMember member={member} key={member.id} />
			)}
		</Container>
	)
})