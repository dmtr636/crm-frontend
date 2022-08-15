import {observer} from "mobx-react";
import {taskTypes} from "../../constants/taskTypes";
import {HomeSelectTypeTab} from "./HomeSelectTypeTab";
import styled from "styled-components";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {HomeProjectCardSelectTab} from "./HomeProjectCardSelectTab";

const Container = styled.div`
	display: flex;
`

export const HomeProjectCardSelect = observer(() => {
	return (
		<Container>
			<HomeProjectCardSelectTab
				value={"all"}
				text={"Все задачи"}
			/>
			<HomeProjectCardSelectTab
				value={"completed"}
				text={"Выполненные"}
			/>
		</Container>
	)
})