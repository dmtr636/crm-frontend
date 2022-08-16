import styled from "styled-components";
import infoIcon from "assets/home/homeProjectInfo.svg"
import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";

const Header = styled.div`
    height: 84px;
    background: #1F232C;
    border-radius: 5px 5px 0px 0px;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ProjectName = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`
const InfoButton = styled.button`
    mask: url(${infoIcon});
    background-color: white;
    width: 48px;
    height: 48px;
`

export const HomeProjectCardHeader = () => {
	const project = useContext(HomeProjectContext)!

	return (
		<Header>
			<ProjectName>
				{project.project_name}
			</ProjectName>
			<InfoButton/>
		</Header>
	)
}