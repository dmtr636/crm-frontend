import styled from "styled-components";
import {dateTsToString} from "../../utils/utils";
import {observer} from "mobx-react";
import {projectStore} from "../../store/projectStore";
import {IProject} from "../../interfaces/entities/IProject";

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

type Props = {
	project: IProject
}

export const HomeProjectTasksDate = observer((props: Props) => {
	return (
		<Container>
			<Date>
				{dateTsToString(props.project.deadline)}
			</Date>
			<Line/>
		</Container>
	)
})