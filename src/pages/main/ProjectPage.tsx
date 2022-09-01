import {observer} from "mobx-react";
import styled from "styled-components";
import {ProjectHeader} from "../../components/project/ProjectHeader";
import {Tabs} from "../../components/common/tabs/Tabs";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useStore} from "../../hooks/hooks";
import {Loading} from "../../components/common/Loading";

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
		store.taskObjectStore,
		store.projectAccessObjectStore,
		store.projectLinksObjectStore,
		store.projectMemberObjectStore
	]

	useEffect(() => {
		stores.forEach(store => {
			store.setFilter({"project_id": id})
			store.fetchObjects()
		})
		return () => {
			stores.forEach(store => {
				store.setFilter({})
			})
		}
	}, [id])

	const isReady = store.taskObjectStore.isReady

	return (
		<Container>
			{isReady
				?
				<>
					<ProjectHeader/>
					<Line/>
					<Tabs store={store.projectTabStore}/>
					{store.projectTabStore.tab.component}
				</>
				: <Loading />
			}
		</Container>
	)
})