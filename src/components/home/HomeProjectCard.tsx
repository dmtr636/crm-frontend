import styled from "styled-components";
import {HomeProjectCardHeader} from "./HomeProjectCardHeader";
import {HomeProjectCardSelect} from "./HomeProjectCardSelect";
import {HomeProjectCardTaskBoard} from "./HomeProjectCardTaskBoard";

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
				<HomeProjectCardTaskBoard />
			</Content>
		</Card>
	)
}