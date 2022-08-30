import {observer} from "mobx-react";
import styled from "styled-components";
import {HomeProjectTasksDate} from "./HomeProjectTasksDate";
import {HomeProjectTasksCard} from "./HomeProjectTasksCard";
import {ITask} from "../../interfaces/entities/ITask";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
    margin-top: 48px;
`

type Props = {
	project_id: number,
	tasks: ITask[]
}

export const HomeProjectTasks = observer((props: Props) => {
	const store = useStore()
	const project = store.projectStore.getProjectById(props.project_id)!

	return (
		<Container>
			<HomeProjectTasksDate project={project} />
			<HomeProjectTasksCard project={project} tasks={props.tasks} />
		</Container>
	)
})
