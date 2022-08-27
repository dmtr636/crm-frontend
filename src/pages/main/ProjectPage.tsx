import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectHeader} from "../../components/project/ProjectHeader";
import {Tabs} from "../../components/common/tabs/Tabs";
import {projectTabStore} from "../../store/tabStore";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {taskObjectStore} from "../../store/objectStore";
import {useStore} from "../../hooks/hooks";

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
	const store = useStore()

	useEffect(() => {
		taskObjectStore.setFilter({"project_id": id})
		taskObjectStore.fetchObjects()

		store.projectAccessObjectStore.setFilter({"project_id": id})
		store.projectAccessObjectStore.fetchObjects()
	}, [id])

	const isReady = taskObjectStore.isReady && store.projectAccessObjectStore.isReady

	return (
		<Container>
			<ProjectHeader/>
			<Line/>
			<Tabs store={projectTabStore}/>
			{isReady && projectTabStore.tab.component}
		</Container>
	)
})