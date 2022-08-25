import {observer} from "mobx-react";
import styled from "styled-components";
import {projectObjectStore} from "../../store/objectStore";
import {ProjectListItem} from "./ProjectListItem";
import {projectStore} from "../../store/projectStore";
import {projectsTabStore} from "../../store/tabStore";

const Container = styled.div`
    margin-top: 48px;
`

export const ProjectList = observer(() => {
	const projects = projectStore.filterByCategory(projectsTabStore.option.id)

	return (
		<Container>
			{projects?.map(project =>
				<ProjectListItem project={project}/>
			)}
		</Container>
	)
})