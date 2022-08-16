import {observer} from "mobx-react";
import styled from "styled-components";
import {HomeProject} from "../components/home/HomeProject";
import {HomeSelectType} from "../components/home/HomeSelectType";
import {projectStore} from "../store/projectStore";

const Container = styled.div`

`

export const HomePage = observer(() => {
	return (
		<Container>
			<HomeSelectType/>
			{projectStore.homeProjects.map(project =>
				<HomeProject project={project} key={project.project_id}/>
			)}
		</Container>
	)
})