import {Tabs} from "../../components/common/tabs/Tabs";
import {studioTabStore} from "../../store/tabStore";
import styled from "styled-components";
import {observer} from "mobx-react";

const Container = styled.div`
	padding: 26px 46px;
`
const Line = styled.div`
	background: #1F232C;
	height: 3px;
	margin-top: 48px;
`

export const StudioPage = observer(() => {
	return (
		<Container>
			<Tabs store={studioTabStore}/>
			<Line />
			{studioTabStore.option.component}
		</Container>
	)
})