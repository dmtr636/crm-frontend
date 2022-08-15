import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";
import styled from "styled-components";
import {ITask} from "../../interfaces/ITask";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {HomeProjectCardTasksColumn} from "./HomeProjectCardTasksColumn";

const COLUMN_COUNT = 4
const ITEMS_IN_COLUMN = 3

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(${COLUMN_COUNT}, 1fr);
	grid-gap: 26px;
	margin-top: 48px;
`

const makeColumns = (project: IHomeProject) => {
	const columns: (ITask[])[] = []

	for (let i = 0; i < COLUMN_COUNT; i++) {
		let column: ITask[] = []
		if (i*COLUMN_COUNT >= project.tasks.length) {
			break
		}
		for (let j = 0; j < ITEMS_IN_COLUMN; j++) {
			if (i*COLUMN_COUNT + j === project.tasks.length) {
				break
			}
			column.push(project.tasks[i*COLUMN_COUNT + j])
		}
		columns.push(column)
	}

	for (let i = COLUMN_COUNT * ITEMS_IN_COLUMN; i < project.tasks.length; i++) {
		let colIdx = i % COLUMN_COUNT
		columns[colIdx].push(project.tasks[i])
	}

	return columns
}

export const HomeProjectCardTasks = () => {
	const project = useContext(HomeProjectContext)!

	const columns: (ITask[])[] = makeColumns(project)

	return (
		<Container>
			{columns.map(column =>
				<HomeProjectCardTasksColumn tasks={column} key={column[0].id} />
			)}
		</Container>
	)
}