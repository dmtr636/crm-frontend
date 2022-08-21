import {Tabs} from "../../components/common/tabs/Tabs";
import {studioTabStore} from "../../store/tabStore";
import styled from "styled-components";
import {observer} from "mobx-react";
import {OpenDialogButton} from "../../components/common/button/OpenDialogButton";
import {studioCommandDialog} from "../../constants/dialog/studioCommandDialog";
import {studioMoneyDialog} from "../../constants/dialog/studioMoneyDialog";
import {studioAccessDialog} from "../../constants/dialog/studioAccessDialog";
import {DialogType} from "../../store/dialogStore";

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

const getDialogData = () => {
	switch (studioTabStore.option.id) {
		case "money": return studioMoneyDialog
		case "access": return studioAccessDialog
		case "command": return studioCommandDialog
		default: return studioCommandDialog
	}
}

export const StudioPage = observer(() => {
	return (
		<Container>
			<TopPanel>
				<Tabs store={studioTabStore}/>
				<OpenDialogButton dialogType={DialogType.add} dialogData={getDialogData()}>
					{studioTabStore.option.actionButtonText}
				</OpenDialogButton>
			</TopPanel>
			<Line/>
			{studioTabStore.option.component}
		</Container>
	)
})