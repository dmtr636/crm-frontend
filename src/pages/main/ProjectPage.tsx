import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectHeader} from "../../components/project/ProjectHeader";
import {Tabs} from "../../components/common/tabs/Tabs";
import {projectTabStore} from "../../store/tabStore";

const Container = styled.div`
    padding: 26px 46px;
`
const Line = styled.div`
    background: #1F232C;
    height: 3px;
    margin-top: 29px;
	margin-bottom: 48px;
`

export const ProjectPage = observer(() => {
	return (
		<Container>
			<ProjectHeader />
			<Line />
			<Tabs store={projectTabStore} />
		</Container>
	)
})