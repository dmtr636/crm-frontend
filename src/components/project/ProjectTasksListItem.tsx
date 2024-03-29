import {observer} from "mobx-react";
import styled from "styled-components";
import editButton from "assets/common/editButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {ITask} from "../../interfaces/entities/ITask";
import {projectTasksTabs} from "../../constants/projectTasksTabs";
import {createProjectTaskDialogData} from "../../constants/dialog/projectTaskDialogData";
import {useStore} from "../../hooks/hooks";
import {createProjectQuestDialogData} from "../../constants/dialog/projectQuestDialogData";
import {dateTsToString} from "../../utils/utils";

const Container = styled.div`
	margin-bottom: 26px;
	height: 76px;
	background: white;
    border: 3px solid #1F232C;
    border-radius: 5px;
	display: flex;
	align-items: center;
	column-gap: 48px;
	padding: 0 26px 0 26px;
`
const Column = styled.div`
	
`
const Label = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: rgba(31, 35, 44, 0.7);
	margin-bottom: 10px;
`
const Value = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #1F232C;
	min-width: 70px;
`
const Button = styled.button<{src: string}>`
	background: url(${props => props.src});
    width: 34px;
    height: 34px;
	margin-left: auto;
	
	&:hover {
		opacity: 0.85;
	}
`
export const ProjectTasksListItem = observer((props: {task: ITask}) => {
	const {task} = props
	const store = useStore()

	const handleEditClick = () => {
		if (task.type === "task") {
			dialogStore.open(DialogType.edit, createProjectTaskDialogData(store), task, task.id)
		} else {
			dialogStore.open(DialogType.edit, createProjectQuestDialogData(store), task, task.id)
		}
	}

	const getExecutorName = () => {
		return store.memberStore.members?.find((member: { id: number; }) => member.id === task.executor_id)?.name
	}

	const getCategoryName = () => {
		return projectTasksTabs.find(tab => tab.id === task.category)?.title
	}

	return (
		 <Container>
			 <Column>
				 <Label>{"Категория"}</Label>
				 <Value>{getCategoryName()}</Value>
			 </Column>
			 <Column>
				 <Label>{"Исполнитель"}</Label>
				 <Value>{getExecutorName()}</Value>
			 </Column>
			 <Column>
				 <Label>{"Текст"}</Label>
				 <Value>{task.text}</Value>
			 </Column>
			 <Column>
				 <Label>{"Тип"}</Label>
				 <Value>{task.type === "task" ? "Задача" : "Квест"}</Value>
			 </Column>
			 <Column>
				 <Label>{"Выполнена"}</Label>
				 <Value>{task.completed ? "Да" : "Нет"}</Value>
			 </Column>
			 <Column>
				 <Label>{"Дедлайн"}</Label>
				 <Value>{dateTsToString(task.deadline, "number")}</Value>
			 </Column>
			 <Button src={editButton} onClick={handleEditClick} />
		 </Container>
	)
})