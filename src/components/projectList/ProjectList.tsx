import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectListItem} from "./ProjectListItem";
import {projectListTabStore} from "../../store/tabStore";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
    margin-top: 48px;
`

export const ProjectList = observer(() => {
	const store = useStore()
	const projects = store.projectStore.filterByCategory(projectListTabStore.tab.id)

	return (
		<Container>
			{projects?.map(project =>
				<ProjectListItem project={project}/>
			)}
		</Container>
	)
})