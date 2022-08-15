import styled from "styled-components";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {dateTsToString} from "../../utils/utils";
import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 48px 0;
`
const Date = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
`
const Line = styled.div`
	background: #1F232C;
	height: 3px;
	flex-grow: 1;
	margin-left: 26px;
`

export const HomeProjectDate = () => {
	const project = useContext(HomeProjectContext)!

	return (
		<Container>
			<Date>
				{dateTsToString(project.date_ts)}
			</Date>
			<Line />
		</Container>
	)
}