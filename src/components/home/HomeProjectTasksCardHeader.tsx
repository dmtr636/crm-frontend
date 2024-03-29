import styled from "styled-components";
import infoIcon from "assets/home/homeProjectInfo.svg"
import {observer} from "mobx-react";
import {IProject} from "../../interfaces/entities/IProject";
import {useStore} from "../../hooks/hooks";

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
	
    opacity: 0.5;
	
	&:hover {
		opacity: 0.7;
	}
	&:active {
		opacity: 1;
	}
`

type Props = {
	project: IProject
}

export const HomeProjectTasksCardHeader = observer((props: Props) => {
	const store = useStore()

	const handleInfoButtonClick = () => {
		store.projectInfoDrawerStore.open(props.project)
	}

	return (
		<Header>
			<ProjectName>
				{props.project.name}
			</ProjectName>
			<InfoButton onClick={handleInfoButtonClick} />
		</Header>
	)
})