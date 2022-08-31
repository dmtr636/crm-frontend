import {observer} from "mobx-react";
import {useStore} from "../../../hooks/hooks";
import {useEffect} from "react";
import {ProjectInfoDrawerSectionTitle} from "./ProjectInfoDrawerSectionTitle";
import styled from "styled-components";
import { ProjectLinks } from "components/project/ProjectLinks";
import { ProjectMembersList } from "components/project/ProjectMembersList";
import { ProjectAccess } from "components/project/ProjectAccess";
import {ProjectInfoDrawerAccesses} from "./ProjectInfoDrawerAccesses";

const LoadingText = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
`

export const ProjectInfoDrawer = observer(() => {
	const store = useStore()

	const stores = [
		store.projectLinksObjectStore,
		store.projectAccessObjectStore,
		store.projectMemberObjectStore
	]

	useEffect(() => {
		stores.forEach(objectStore => {
			objectStore.setFilter({"project_id": store.projectInfoDrawerStore.project?.id})
			objectStore.fetchObjects()
		})
	}, [store.projectInfoDrawerStore.project?.id])

	const isReady = stores.every(store => store.isReady)

	return (
		<>
			{isReady
				?
				<>
					<ProjectInfoDrawerSectionTitle title={"Ссылки"}/>
					<ProjectLinks showBorder={false}/>
					<ProjectInfoDrawerSectionTitle title={"Доступы"}/>
					<ProjectInfoDrawerAccesses />
					<ProjectInfoDrawerSectionTitle title={"Команда"}/>
					<ProjectMembersList />
				</>
				:
				<LoadingText>
					ЗАГРУЗКА...
				</LoadingText>
			}
		</>
	)
})