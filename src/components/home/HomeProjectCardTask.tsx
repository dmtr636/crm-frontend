import {ITask} from "../../interfaces/ITask";
import styled from "styled-components";

const Task = styled.div`
    width: 312px;
    background: #1F232C;
	color: white;
    border-radius: 5px;
	padding: 17px 34px;
	display: flex;
	align-items: center;
	column-gap: 25px;
`
const Checkbox = styled.button`
    width: 18px;
    height: 18px;
    border: 2px solid #FFFFFF;
	border-radius: 50%;
	flex-shrink: 0;
`
const Text = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`

export const HomeProjectCardTask = (props: {task: ITask}) => {
	return (
		<Task>
			<Checkbox />
			<Text>
				{props.task.text}
			</Text>
		</Task>
	)
}