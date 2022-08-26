import {observer} from "mobx-react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ProjectTasksTab} from "./ProjectTasksTab";
import {taskStore} from "../../store/taskStore";
import {projectTasksTabs} from "../../constants/projectTasksTabs";

const Container = styled.div`
    margin-top: 48px;
`
const Tabs = styled.div`
    display: flex;
    column-gap: 26px;
`
const Tasks = styled.div`
    margin-top: 48px;
`

const getTabValue = (category: string) => {
	const completedCount = taskStore.getCompletedTasksByCategory(category)?.length ?? 0
	const totalCount = taskStore.getTasksByCategory(category)?.length ?? 0
	return `${completedCount} из ${totalCount}`
}

export const ProjectTasks = observer(() => {
	const [activeTabIndex, setActiveTabIndex] = useState(0)

	const tabs = projectTasksTabs.map(tab => {
		return {
			title: tab.value,
			value: getTabValue(tab.id),
			category: tab.id
		}
	})

	const tasks = taskStore.getTasksByCategory(tabs[activeTabIndex].category)

	return (
		<Container>
			<Tabs>
				{tabs.map((tab, index) =>
					<ProjectTasksTab
						tab={tab}
						onClick={() => setActiveTabIndex(index)}
						active={activeTabIndex === index}
					/>
				)}
			</Tabs>
			<Tasks>
				{tasks?.map(task =>
					<div>
						{task.text}
					</div>
				)}
			</Tasks>
		</Container>
	)
})