import {ITask} from "../../interfaces/ITask";
import styled from "styled-components";

const Task = styled.div`
    width: 312px;
    background: #1F232C;
	color: white;
    border-radius: 5px;
	padding: 17px 34px;
`

export const HomeProjectCardTask = (props: {task: ITask}) => {
	return (
		<Task>
			{props.task.text}
		</Task>
	)
}