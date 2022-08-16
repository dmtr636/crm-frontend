import {useContext, useEffect, useState} from "react";
import {HomeProjectContext} from "./HomeProject";
import styled from "styled-components";
import {ITask} from "../../interfaces/ITask";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {HomeProjectCardTaskColumn} from "./HomeProjectCardTaskColumn";
import useWindowDimensions from "../../hooks/hooks";
import {observer} from "mobx-react";

const ITEMS_IN_COLUMN = 3

const Container = styled.div<{columnCount: number}>`
	display: grid;
	grid-template-columns: repeat(${props => props.columnCount}, 312px);
	grid-gap: 26px;
	margin-top: 48px;
`

const makeColumns = (project: IHomeProject, columnCount: number) => {
	let tasks
	if (project.tasks_filter === "completed") {
		tasks = project.tasks.filter(task => task.completed)
	} else {
		tasks = project.tasks
	}

	const columns: (ITask[])[] = []

	for (let i = 0; i < columnCount; i++) {
		columns.push([])
	}

	for (let i = 0; i < tasks.length; i++) {
		let colIdx = Math.floor(i / ITEMS_IN_COLUMN)
		if (i >= columnCount * ITEMS_IN_COLUMN) {
			colIdx = i % columnCount
		}
		columns[colIdx].push(tasks[i])
	}

	return columns
}

const getColumnCount = (width: number) => {
	if (width < 1600) {
		return 3
	} else if (width < 2560) {
		return 4
	} else {
		return 6
	}
}

export const HomeProjectCardTaskBoard = observer(() => {
	const project = useContext(HomeProjectContext)!
	const {width} = useWindowDimensions()
	const [columns, setColumns] = useState<(ITask[])[]>()
	const [columnCount, setColumnCount] = useState(3)

	useEffect(() => {
		setColumnCount(getColumnCount(width))
	}, [width])

	useEffect(() => {
		setColumns(makeColumns(project, columnCount))
	}, [columnCount, project, project.tasks, project.tasks_filter])

	return (
		<Container columnCount={columnCount}>
			{columns?.map(column => column.length > 0 &&
				<HomeProjectCardTaskColumn tasks={column} key={column[0].id} />
			)}
		</Container>
	)
})