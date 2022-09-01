import {observer} from "mobx-react";
import styled from "styled-components";
import {Tabs} from "../../components/common/tabs/Tabs";
import {homeTabStore} from "../../store/tabStore";
import {useStore} from "../../hooks/hooks";
import {HomeTaskGroup} from "../../components/home/HomeTaskGroup";
import {ITask} from "../../interfaces/entities/ITask";
import {ProjectInfoDrawer} from "../../components/common/drawer/ProjectInfoDrawer";
import {Drawer} from "../../components/common/drawer/Drawer";
import {Loading} from "../../components/common/Loading";

const Container = styled.div`
    padding: 26px 46px;
`

export const HomePage = observer(() => {
	const store = useStore()
	const currentDateTs = (new Date()).setHours(0, 0, 0) / 1000

	const filterTasks = (tasks: ITask[]) => {
		switch (homeTabStore.tab.id) {
			case "my_project":
				return tasks.filter(task =>
					task.type === "task"
					&& (!task.completed || task.deadline > currentDateTs)
				)
			case "quest":
				return tasks.filter(task =>
					task.type === "quest"
					&& (!task.completed || task.deadline > currentDateTs)
				)
			case "archive":
				return tasks.filter(task =>
					task.completed && task.deadline <= currentDateTs
				)
			default:
				return tasks
		}
	}

	const isReady = store.projectObjectStore.isReady && store.taskStore.isReady

	return (
		<Container>
			{isReady
				?
				<>
					<Tabs store={homeTabStore}/>
					{store.taskStore.groupedTasks?.map(taskGroup =>
						taskGroup.projects?.map(project =>
							<HomeTaskGroup
								project_id={project.project_id}
								deadline={taskGroup.deadline}
								tasks={filterTasks(project.tasks)}
							/>
						)
					)}
				</>
				: <Loading/>
			}

			<Drawer
				title={store.projectInfoDrawerStore.project?.name}
				isShow={store.projectInfoDrawerStore.isShowDrawer}
				onClose={() => store.projectInfoDrawerStore.close()}
			>
				<ProjectInfoDrawer/>
			</Drawer>
		</Container>
	)
})