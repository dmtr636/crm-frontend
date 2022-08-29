import {useEffect, useState} from "react";
import styled from "styled-components";
import {ITask} from "../../interfaces/entities/ITask";
import {HomeProjectTasksColumn} from "./HomeProjectTasksColumn";
import useWindowDimensions from "../../hooks/hooks";
import {observer} from "mobx-react";
import {computed} from "mobx";

const ITEMS_IN_COLUMN = 3

const Container = styled.div<{ columnCount: number }>`
    display: grid;
    grid-template-columns: repeat(${props => props.columnCount}, 312px);
    grid-gap: 26px;
    margin-top: 48px;
`

const cmpFunc = (task1: ITask, task2: ITask) => {
	if (task1.completed !== task2.completed) {
		return task1.completed ? 1 : -1
	} else {
		return task1.id > task2.id ? 1 : -1
	}
}

const makeColumns = (tasks: ITask[], columnCount: number) => {
	tasks.sort(cmpFunc)

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
	if (width < 960) {
		return 1
	} else if (width < 1280) {
		return 2
	} else if (width < 1600) {
		return 3
	} else if (width < 1980) {
		return 4
	} else if (width < 2560) {
		return 5
	} else {
		return 6
	}
}

type Props = {
	tasks: ITask[]
}

export const HomeProjectTasksCardTaskBoard = observer((props: Props) => {
	const {tasks} = props
	const {width} = useWindowDimensions()
	const [columns, setColumns] = useState<(ITask[])[]>()
	const [columnCount, setColumnCount] = useState(3)

	const completedCount = computed(() => {
		return tasks.filter(task => task.completed).length
	}).get()

	useEffect(() => {
		setColumnCount(getColumnCount(width))
	}, [width])

	useEffect(() => {
		setColumns(makeColumns(tasks, columnCount))
	}, [columnCount, tasks, completedCount])

	return (
		<Container columnCount={columnCount}>
			{columns?.map(column => column.length > 0 &&
                <HomeProjectTasksColumn tasks={column}/>
			)}
		</Container>
	)
})