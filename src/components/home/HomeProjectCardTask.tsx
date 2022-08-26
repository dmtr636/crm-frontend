import {ITask} from "../../interfaces/entities/ITask";
import styled from "styled-components";
import {observer} from "mobx-react";
import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";
import {darkColors} from "../../theme/colors";

const Task = styled.div`
    width: 312px;
    background: ${darkColors.default};
	color: white;
    border-radius: 5px;
	padding: 17px 34px;
	display: flex;
	align-items: center;
	column-gap: 25px;
	cursor: pointer;
	
	&:hover {
		background: ${darkColors.hover};
	}
	&:active {
        background: ${darkColors.pressed};
    }
`
const Checkbox = styled.button<{completed: boolean}>`
    width: 18px;
    height: 18px;
    border: 2px solid #FFFFFF;
	border-radius: 50%;
	flex-shrink: 0;
	background: ${props => props.completed && '#FFFFFF'};
`
const Text = styled.div<{completed: boolean}>`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
	cursor: pointer;
	user-select: none;
	text-decoration: ${props => props.completed && 'line-through'};
`

const cmpFunc = (task1: ITask, task2: ITask) => {
	if (task1.completed !== task2.completed) {
		return task1.completed ? 1 : -1
	} else {
		return task1.id > task2.id ? 1 : -1
	}
}

export const HomeProjectCardTask = observer((props: {task: ITask}) => {
	const project = useContext(HomeProjectContext)!

	const reorderTasks = () => {
		project.tasks = [...project.tasks.sort(cmpFunc)]
	}

	const handleClick = () => {
		props.task.completed = !props.task.completed
		reorderTasks()
	}

	return (
		<Task onClick={handleClick}>
			<Checkbox completed={props.task.completed}/>
			<Text completed={props.task.completed}>
				{props.task.text}
			</Text>
		</Task>
	)
})