import {observer} from "mobx-react";
import styled from "styled-components";
import {useStore} from "../../../hooks/hooks";
import {ProjectInfoDrawerAccess} from "./ProjectInfoDrawerAccess";

const Container = styled.div`
    margin: 48px 0;
`

export const ProjectInfoDrawerAccesses = observer(() => {
	const store = useStore()

	return (
		<Container>
			{store.projectAccessObjectStore.objects?.map(access =>
				<ProjectInfoDrawerAccess access={access}/>
			)}
		</Container>
	)
})