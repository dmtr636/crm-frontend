import {observer} from "mobx-react";
import {ProjectTasksTab} from "./ProjectTasksTab";
import styled from "styled-components";
import {projectTasksTabStore} from "../../store/tabStore";
import {ITab} from "../../interfaces/ITab";
import {useStore} from "../../hooks/hooks";

const Tabs = styled.div`
    display: flex;
    column-gap: 26px;
`

export const ProjectTasksTabs = observer(() => {
	const store = useStore()

	const getTabValue = (category: string) => {
		const completedCount = store.projectTaskStore.getCompletedTasksByCategory(category)?.length ?? 0
		const totalCount = store.projectTaskStore.getTasksByCategory(category)?.length ?? 0
		return `${completedCount} из ${totalCount}`
	}

	projectTasksTabStore.tabs.forEach(tab => tab.value = getTabValue(tab.id))

	const handleClick = (tab: ITab) => {
		projectTasksTabStore.setTab(tab)
	}

	return (
		<Tabs>
			{projectTasksTabStore.tabs.map(tab =>
				<ProjectTasksTab
					tab={tab}
					active={tab.id === projectTasksTabStore.tab.id}
					onClick={() => handleClick(tab)}
					key={tab.id}
				/>
			)}
		</Tabs>
	)
})