import {observer} from "mobx-react";
import {taskTypes} from "../../constants/taskTypes";
import {HomeSelectTypeTab} from "./HomeSelectTypeTab";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 26px;
	margin-left: 48px;
	display: flex;
`

export const HomeSelectType = observer(() => {
	return (
		<Container>
			{taskTypes.map(taskType =>
				<HomeSelectTypeTab taskType={taskType} key={taskType.id} />
			)}
		</Container>
	)
})