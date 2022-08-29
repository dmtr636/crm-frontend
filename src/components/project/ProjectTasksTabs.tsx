import {observer} from "mobx-react";
import {ProjectTasksTab} from "./ProjectTasksTab";
import styled from "styled-components";
import {taskStore} from "../../store/projectTaskStore";
import {projectTasksTabStore} from "../../store/tabStore";
import {ITab} from "../../interfaces/ITab";

const Tabs = styled.div`
    display: flex;
    column-gap: 26px;
`

const getTabValue = (category: string) => {
	const completedCount = taskStore.getCompletedTasksByCategory(category)?.length ?? 0
	const totalCount = taskStore.getTasksByCategory(category)?.length ?? 0
	return `${completedCount} из ${totalCount}`
}

export const ProjectTasksTabs = observer(() => {
	const store = projectTasksTabStore

	projectTasksTabStore.tabs.forEach(tab => tab.value = getTabValue(tab.id))

	const handleClick = (tab: ITab) => {
		store.setTab(tab)
	}

	return (
		<Tabs>
			{store.tabs.map(tab =>
				<ProjectTasksTab
					tab={tab}
					active={tab.id === store.tab.id}
					onClick={() => handleClick(tab)}
					key={tab.id}
				/>
			)}
		</Tabs>
	)
})