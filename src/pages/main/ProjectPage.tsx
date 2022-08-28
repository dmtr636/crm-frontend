import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectHeader} from "../../components/project/ProjectHeader";
import {Tabs} from "../../components/common/tabs/Tabs";
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

	const stores = [
		taskObjectStore,
		store.projectAccessObjectStore,
		store.projectLinksObjectStore
	]

	useEffect(() => {
		stores.forEach(store => {
			store.setFilter({"project_id": id})
			store.fetchObjects()
		})
	}, [id])

	const isReady = stores.every(store => store.isReady)

	return (
		<Container>
			<ProjectHeader/>
			<Line/>
			<Tabs store={store.projectTabStore}/>
			{isReady && store.projectTabStore.tab.component}
		</Container>
	)
})