import {observer} from "mobx-react";
import styled from "styled-components";
import {memberStore} from "../../store/memberStore";
import {StudioCommandMember} from "./StudioCommandMember";

const Container = styled.div`
	margin-top: 48px;
`

export const StudioCommand = observer(() => {
	return (
		<Container>
			{memberStore.members?.map(member =>
				<StudioCommandMember member={member} key={member.id} />
			)}
		</Container>
	)
})