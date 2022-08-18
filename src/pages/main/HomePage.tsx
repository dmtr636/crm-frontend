import {observer} from "mobx-react";
import styled from "styled-components";
import {HomeProject} from "../../components/home/HomeProject";
import {projectStore} from "../../store/projectStore";
import {Tabs} from "../../components/common/tabs/Tabs";
import {homeTabStore} from "../../store/tabStore";

const Container = styled.div`
	padding: 26px 46px;
`

export const HomePage = observer(() => {
	return (
		<Container>
			<Tabs store={homeTabStore} />
			{projectStore.homeProjects.map(project =>
				<HomeProject project={project} key={project.project_id}/>
			)}
		</Container>
	)
})