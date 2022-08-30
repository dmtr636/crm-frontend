import {ITask} from "../../interfaces/entities/ITask";
import styled from "styled-components";
import {observer} from "mobx-react";
import {darkColors} from "../../theme/colors";
import {useStore} from "../../hooks/hooks";

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

export const HomeProjectTasksCardTask = observer((props: {task: ITask}) => {
	const {task} = props
	const store = useStore()

	const handleClick = () => {
		store.taskStore.updateTask(task)
	}

	return (
		<Task onClick={handleClick}>
			<Checkbox completed={task.completed}/>
			<Text completed={task.completed}>
				{task.text}
			</Text>
		</Task>
	)
})