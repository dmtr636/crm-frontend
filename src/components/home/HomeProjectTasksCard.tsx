import styled from "styled-components";
import {HomeProjectTasksCardHeader} from "./HomeProjectTasksCardHeader";
import {HomeProjectTasksCardSelect} from "./HomeProjectTasksCardSelect";
import {HomeProjectTasksCardTaskBoard} from "./HomeProjectTasksCardTaskBoard";
import {ITask} from "../../interfaces/entities/ITask";
import {IProject} from "../../interfaces/entities/IProject";
import {observer} from "mobx-react";
import {useEffect, useState} from "react";
import {ITab} from "../../interfaces/ITab";
import {TabStore} from "../../store/tabStore";
import {computed} from "mobx";

const Card = styled.div`
	margin-top: 48px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Content = styled.div`
	padding: 26px 48px;
`

const tabs: ITab[] = [
	{
		id: "all",
		value: "Все задачи"
	},
	{
		id: "completed",
		value: "Выполненные"
	}
]

type Props = {
	project: IProject
	tasks: ITask[]
}

export const HomeProjectTasksCard = observer((props: Props) => {
	const [tabStore] = useState(new TabStore(tabs))

	const tasks = computed(() => {
		switch (tabStore?.tab.id) {
			case "all": return props.tasks
			case "completed": return props.tasks.filter(task => task.completed)
			default: return props.tasks
		}
	}).get()

	return (
		<Card>
			<HomeProjectTasksCardHeader project={props.project} />
			<Content>
				<HomeProjectTasksCardSelect tabStore={tabStore} />
				<HomeProjectTasksCardTaskBoard tasks={tasks} />
			</Content>
		</Card>
	)
})