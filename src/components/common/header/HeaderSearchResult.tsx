import styled from "styled-components";
import {HeaderSearchResultItem} from "./HeaderSearchResultItem";
import {observer} from "mobx-react";
import {useStore} from "../../../hooks/hooks";

const Container = styled.div`
	position: absolute;
	top: 50px;
	right: 0;
    width: 426px;
    background: #FFFFFF;
    border-radius: 0px 0px 5px 5px;
`

export const HeaderSearchResult = observer((props: {searchQuery: string}) => {
	const store = useStore()
	const projects = store.projectStore.search(props.searchQuery)

	return (
		<Container>
			{projects?.map(project =>
				<HeaderSearchResultItem text={project.name} projectId={project.id} />
			)}
			{projects?.length === 0 &&
                <HeaderSearchResultItem text={"Совпадений не найдено"} />
			}
		</Container>
	)
})
