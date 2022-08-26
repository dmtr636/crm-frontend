import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectHeader} from "../../components/project/ProjectHeader";
import {Tabs} from "../../components/common/tabs/Tabs";
import {projectTabStore} from "../../store/tabStore";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {taskObjectStore} from "../../store/objectStore";

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
	const params = useParams()
	const id = Number(params.id)

	useEffect(() => {
		taskObjectStore.setFilter({"project_id": id})
		taskObjectStore.fetchObjects()
	}, [id])

	return (
		<Container>
			<ProjectHeader/>
			<Line/>
			<Tabs store={projectTabStore}/>
			{projectTabStore.option.component}
		</Container>
	)
})