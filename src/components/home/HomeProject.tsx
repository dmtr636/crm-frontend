import {observer} from "mobx-react";
import styled from "styled-components";
import {IHomeProject} from "../../interfaces/IHomeProject";
import {HomeProjectDate} from "./HomeProjectDate";
import {HomeProjectCard} from "./HomeProjectCard";
import {createContext} from "react";

const Container = styled.div`
    padding: 0 48px;
	margin: 48px 0;
`

export const HomeProjectContext = createContext<IHomeProject | null>(null);

export const HomeProject = observer((props: { project: IHomeProject }) => {
	return (
		<HomeProjectContext.Provider value={props.project}>
			<Container>
				<HomeProjectDate />
				<HomeProjectCard />
			</Container>
		</HomeProjectContext.Provider>
	)
})
