import {Tabs} from "../../components/common/tabs/Tabs";
import {studioTabStore} from "../../store/tabStore";
import styled from "styled-components";
import {observer} from "mobx-react";
import {OpenDialogButton} from "../../components/common/button/OpenDialogButton";
import {DialogType} from "../../store/dialogStore";
import {createStudioMoneyDialog} from "../../constants/dialog/studioMoneyDialog";
import {createStudioAccessDialog} from "../../constants/dialog/studioAccessDialog";
import {createStudioCommandDialog} from "../../constants/dialog/studioCommandDialog";
import {useStore} from "../../hooks/hooks";

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

export const StudioPage = observer(() => {
	const store = useStore()

	const getDialogData = () => {
		switch (studioTabStore.tab.id) {
			case "money": return createStudioMoneyDialog(store)
			case "access": return createStudioAccessDialog(store)
			case "command": return createStudioCommandDialog(store)
			default: return createStudioCommandDialog(store)
		}
	}

	return (
		<Container>
			<TopPanel>
				<Tabs store={studioTabStore}/>
				<OpenDialogButton dialogType={DialogType.add} dialogData={getDialogData()}>
					{studioTabStore.tab.actionButtonText}
				</OpenDialogButton>
			</TopPanel>
			<Line/>
			{studioTabStore.tab.component}
		</Container>
	)
})