import styled from "styled-components";
import {ITaskType} from "../../interfaces/ITaskType";
import {observer} from "mobx-react";
import {taskStore} from "../../store/taskStore";

const Tab = styled.button<{active: boolean}>`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	margin-right: 26px;
	border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	
	padding: 0 34px;
	
	${props => props.active && `
		border: 3px solid #1F232C;
		padding: 0 31px;
	`}
`

export const HomeSelectTypeTab = observer((props: {taskType: ITaskType}) => {
	const active = props.taskType.id === taskStore.taskType.id

	return (
		<Tab
			active={active}
			onClick={() => taskStore.setType(props.taskType)}
		>
			{props.taskType.value}
		</Tab>
	)
})