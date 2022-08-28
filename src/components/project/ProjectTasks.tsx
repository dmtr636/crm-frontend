import {observer} from "mobx-react";
import styled from "styled-components";
import {taskStore} from "../../store/taskStore";
import {projectTasksTabStore} from "../../store/tabStore";
import {ProjectTasksTabs} from "./ProjectTasksTabs";
import {ProjectTasksListItem} from "./ProjectTasksListItem";
import {computed} from "mobx";

const Container = styled.div`
    margin-top: 48px;
`

const Tasks = styled.div`
    margin-top: 48px;
`

export const ProjectTasks = observer(() => {
	const tasks = computed(() =>
		taskStore.getTasksByCategory(projectTasksTabStore.tab.id)
	).get()

	return (
		<Container>
			<ProjectTasksTabs/>
			<Tasks>
				{tasks?.map(task =>
					<ProjectTasksListItem task={task} key={task.id}/>
				)}
			</Tasks>
		</Container>
	)
})