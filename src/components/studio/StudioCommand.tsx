import {observer} from "mobx-react";
import styled from "styled-components";
import {StudioCommandMember} from "./StudioCommandMember";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioCommand = observer(() => {
	const store = useStore()
	const members = store.memberObjectStore.objects

	return (
		<Container>
			{members?.map(member =>
				<StudioCommandMember member={member} key={member.id} />
			)}
		</Container>
	)
})