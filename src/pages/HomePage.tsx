import {observer} from "mobx-react";
import userStore from "../store/userStore";
import {useNavigate} from "react-router-dom";
import {Header} from "../components/common/header/Header";
import styled from "styled-components";
import {HomeProject} from "../components/home/HomeProject";
import {HomeSelectType} from "../components/home/HomeSelectType";
import {projectStore} from "../store/projectStore";
import {dateTsToString} from "../utils/utils";

const Container = styled.div`

`

export const HomePage = observer(() => {
	const navigate = useNavigate()

	const logout = () => {
		userStore.logout()
		navigate("/login", {replace: true})
	}

	return (
		<Container>
			<Header/>
			<HomeSelectType />

			{projectStore.homeProjects.map(project =>
				<HomeProject project={project} key={project.project_id} />
			)}
		</Container>
	)
})