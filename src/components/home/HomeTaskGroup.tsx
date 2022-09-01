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
	deadline: number
	tasks: ITask[]
}

export const HomeTaskGroup = observer((props: Props) => {
	const {project_id, deadline, tasks} = props
	const store = useStore()
	const project = store.projectStore.getProjectById(project_id)!

	return (
		<>
			{tasks.length > 0 &&
                <Container>
                    <HomeProjectTasksDate deadline={deadline} />
                    <HomeProjectTasksCard project={project} tasks={tasks} />
                </Container>
			}
		</>
	)
})
