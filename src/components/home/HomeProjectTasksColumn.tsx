import styled from "styled-components";
import {ITask} from "../../interfaces/entities/ITask";
import {HomeProjectTasksCardTask} from "./HomeProjectTasksCardTask";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 26px;
`

export const HomeProjectTasksColumn = (props: {tasks: ITask[]}) => {
	return (
		<Column>
			{props.tasks.map(task =>
				<HomeProjectTasksCardTask task={task} key={task.id} />
			)}
		</Column>
	)
}