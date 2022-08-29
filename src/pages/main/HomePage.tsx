import {observer} from "mobx-react";
import styled from "styled-components";
import {Tabs} from "../../components/common/tabs/Tabs";
import {homeTabStore} from "../../store/tabStore";
import {useStore} from "../../hooks/hooks";
import {HomeProjectTasks} from "../../components/home/HomeProjectTasks";
import {computed} from "mobx";
import _ from "lodash";
import {ITask} from "../../interfaces/entities/ITask";

const Container = styled.div`
    padding: 26px 46px;
`

export const HomePage = observer(() => {
	const store = useStore()

	const filteredTasks = computed(() => {
		switch (homeTabStore.tab.id) {
			case "my_project": return store.taskStore.tasks.filter(task => task.type === "task")
			case "quest": return store.taskStore.tasks.filter(task => task.type === "quest")
			default: return store.taskStore.tasks
		}
	}).get()

	const groupedTasks = computed(() => {
		return _.groupBy(
			filteredTasks,
			(task: ITask) => task.project_id
		)
	}).get()

	return (
		<Container>
			<Tabs store={homeTabStore}/>
			{Object.entries(groupedTasks).map(([projectId, tasks]) =>
				<HomeProjectTasks
					project_id={Number(projectId)}
					tasks={tasks}
				/>
			)}
		</Container>
	)
})