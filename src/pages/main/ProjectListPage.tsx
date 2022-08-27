import styled from "styled-components";
import {Tabs} from "../../components/common/tabs/Tabs";
import {projectListTabStore} from "../../store/tabStore";
import {OpenDialogButton} from "../../components/common/button/OpenDialogButton";
import {DialogType} from "../../store/dialogStore";
import {newProjectDialog} from "../../constants/dialog/newProjectDialog";
import {ProjectList} from "../../components/projectList/ProjectList";

const Container = styled.div`
    padding: 26px 46px;
`
const TopPanel = styled.div`
    display: flex;
    justify-content: space-between;
`
const Line = styled.div`
    background: #1F232C;
    height: 3px;
    margin-top: 48px;
`

export const ProjectListPage = () => {
	return (
		<Container>
			<TopPanel>
				<Tabs store={projectListTabStore}/>
				<OpenDialogButton dialogType={DialogType.add} dialogData={newProjectDialog}>
					Новый проект
				</OpenDialogButton>
			</TopPanel>
			<Line/>
			<ProjectList/>
		</Container>
	)
}