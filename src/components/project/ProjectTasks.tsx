import {observer} from "mobx-react";
import styled from "styled-components";
import {projectTasksTabStore} from "../../store/tabStore";
import {ProjectTasksTabs} from "./ProjectTasksTabs";
import {ProjectTasksListItem} from "./ProjectTasksListItem";
import {computed} from "mobx";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
    margin-top: 48px;
`

const Tasks = styled.div`
    margin-top: 48px;
`

export const ProjectTasks = observer(() => {
	const store = useStore()

	const tasks = computed(() =>
		store.projectTaskStore.getTasksByCategory(projectTasksTabStore.tab.id)
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