import {observer} from "mobx-react";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ProjectTasksTab} from "./ProjectTasksTab";
import {taskStore} from "../../store/taskStore";
import {projectTasksTabs} from "../../constants/projectTasksTabs";
import {projectTasksTabStore} from "../../store/tabStore";
import {ProjectTasksTabs} from "./ProjectTasksTabs";
import {ProjectTasksListItem} from "./ProjectTasksListItem";

const Container = styled.div`
    margin-top: 48px;
`

const Tasks = styled.div`
    margin-top: 48px;
`

export const ProjectTasks = observer(() => {
	const tasks = taskStore.getTasksByCategory(projectTasksTabStore.tab.id)

	return (
		<Container>
			<ProjectTasksTabs />
			<Tasks>
				{tasks?.map(task =>
					<ProjectTasksListItem task={task} key={task.id} />
				)}
			</Tasks>
		</Container>
	)
})