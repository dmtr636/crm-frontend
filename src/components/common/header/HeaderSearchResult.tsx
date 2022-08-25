import styled from "styled-components";
import {HeaderSearchResultItem} from "./HeaderSearchResultItem";
import {projectStore} from "../../../store/projectStore";
import {observer} from "mobx-react";

const Container = styled.div`
	position: absolute;
	top: 50px;
	right: 0;
    width: 426px;
    background: #FFFFFF;
    border-radius: 0px 0px 5px 5px;
`

export const HeaderSearchResult = observer((props: {searchQuery: string}) => {
	const projects = projectStore.search(props.searchQuery)

	return (
		<Container>
			{projects?.map(project =>
				<HeaderSearchResultItem text={project.name} />
			)}
			{projects?.length === 0 &&
                <HeaderSearchResultItem text={"Совпадений не найдено"} />
			}
		</Container>
	)
})
