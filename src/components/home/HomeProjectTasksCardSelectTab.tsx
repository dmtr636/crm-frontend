import styled from "styled-components";
import {observer} from "mobx-react";
import {TabStore} from "../../store/tabStore";
import {ITab} from "../../interfaces/ITab";

const Tab = styled.button<{ active: boolean }>`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 26px;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: white;
    background: #1F232C;

    padding: 0 34px;
    opacity: 0.5;

    ${props => props.active && `
		opacity: 1;
	`}
`

type Props = {
	tab: ITab,
	store: TabStore
}

export const HomeProjectTasksCardSelectTab = observer((props: Props) => {
	const active = props.store.tab.id === props.tab.id

	return (
		<Tab
			active={active}
			onClick={() => props.store.setTab(props.tab)}
		>
			{props.tab.value}
		</Tab>
	)
})