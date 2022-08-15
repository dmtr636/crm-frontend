import {observer} from "mobx-react";
import styled from "styled-components";
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