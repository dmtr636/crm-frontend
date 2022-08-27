import {observer} from "mobx-react";
import {Tab} from "./Tab";
import styled from "styled-components";
import {TabStore} from "../../../store/tabStore";

const Container = styled.div`
	display: flex;
`

type Props = {
	store: TabStore
}

export const Tabs = observer((props: Props) => {
	return (
		<Container>
			{props.store.tabs.map(option =>
				<Tab option={option} store={props.store} key={option.id} />
			)}
		</Container>
	)
})