import styled from "styled-components";
import {ITask} from "../../interfaces/ITask";
import {HomeProjectCardTask} from "./HomeProjectCardTask";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 26px;
`

export const HomeProjectCardTasksColumn = (props: {tasks: ITask[]}) => {
	return (
		<Column>
			{props.tasks.map(task =>
				task && <HomeProjectCardTask task={task} />
			)}
		</Column>
	)
}