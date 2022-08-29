import {observer} from "mobx-react";
import styled from "styled-components";
import {HomeProjectTasksCardSelectTab} from "./HomeProjectTasksCardSelectTab";
import {TabStore} from "../../store/tabStore";

const Container = styled.div`
	display: flex;
`

type Props = {
	tabStore: TabStore
}

export const HomeProjectTasksCardSelect = observer((props: Props) => {
	return (
		<Container>
			{props.tabStore.tabs.map(tab =>
				<HomeProjectTasksCardSelectTab
					tab={tab}
					store={props.tabStore}
				/>
			)}
		</Container>
	)
})