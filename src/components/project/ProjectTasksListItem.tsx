import {observer} from "mobx-react";
import {IMember} from "../../interfaces/entities/IMember";
import styled from "styled-components";
import {url} from "../../utils/utils";
import editButton from "assets/common/editButton.svg"
import messageButton from "assets/common/messageButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {studioCommandDialog} from "../../constants/dialog/studioCommandDialog";
import {IAccess} from "../../interfaces/entities/IAccess";
import {studioAccessDialog} from "../../constants/dialog/studioAccessDialog";
import {ITask} from "../../interfaces/entities/ITask";
import {projectTaskDialogData} from "../../constants/dialog/projectTaskDialogData";
import {memberStore} from "../../store/memberStore";
import {projectTasksTabs} from "../../constants/projectTasksTabs";
import {projectQuestDialogData} from "../../constants/dialog/projectQuestDialogData";

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

	const handleEditClick = () => {
		if (task.type === "task") {
			dialogStore.open(DialogType.edit, projectTaskDialogData, task, task.id)
		} else {
			dialogStore.open(DialogType.edit, projectQuestDialogData, task, task.id)
		}
	}

	const getExecutorName = () => {
		return memberStore.members?.find(member => member.id === task.executor_id)?.name
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
			 <Button src={editButton} onClick={handleEditClick} />
		 </Container>
	)
})