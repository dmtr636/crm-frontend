import styled from "styled-components";
import {observer} from "mobx-react";
import {ITab} from "../../../interfaces/ITab";
import {TabStore} from "../../../store/tabStore";

const Container = styled.button<{active: boolean}>`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: white;
	margin-right: 26px;
	border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	
	padding: 0 34px;
	
	${props => props.active && `
		border: 3px solid #1F232C;
		padding: 0 31px;
	`}
`

type Props = {
	option: ITab,
	store: TabStore
}

export const Tab = observer((props: Props) => {
	const active = props.option.id === props.store.tab.id

	return (
		<Container
			active={active}
			onClick={() => props.store.setTab(props.option)}
		>
			{props.option.value}
		</Container>
	)
})