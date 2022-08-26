import styled from "styled-components";
import {ITask} from "../../interfaces/entities/ITask";
import {HomeProjectCardTask} from "./HomeProjectCardTask";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 26px;
`

export const HomeProjectCardTaskColumn = (props: {tasks: ITask[]}) => {
	return (
		<Column>
			{props.tasks.map(task =>
				<HomeProjectCardTask task={task} key={task.id} />
			)}
		</Column>
	)
}