import styled from "styled-components";
import {HomeProjectCardHeader} from "./HomeProjectCardHeader";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {HomeProjectCardSelect} from "./HomeProjectCardSelect";
import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";
import {HomeProjectCardTasks} from "./HomeProjectCardTasks";

const Card = styled.div`
	margin-top: 48px;
    background: #FFFFFF;
    border-radius: 5px;
`
const Content = styled.div`
	padding: 26px 48px;
`

export const HomeProjectCard = () => {

	return (
		<Card>
			<HomeProjectCardHeader />
			<Content>
				<HomeProjectCardSelect />
				<HomeProjectCardTasks />
			</Content>
		</Card>
	)
}