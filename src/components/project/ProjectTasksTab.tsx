import {observer} from "mobx-react";
import styled from "styled-components";
import {ITab} from "../../interfaces/ITab";
import {projectTasksTabStore} from "../../store/tabStore";

const Container = styled.button<{active: boolean}>`
	padding: 26px 48px;
	background: ${props => props.active ? '#1F232C' : '#FFFFFF'};
	color: ${props => props.active ? '#FFFFFF' : '#1F232C'};
	border-radius: 5px;
	text-align: start;
`
const Title = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
`
const Value = styled.div`
	margin-top: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 110%;
    letter-spacing: 0.03em;
`

type Props = {
	tab: ITab,
	active: boolean,
	onClick: () => void
}

export const ProjectTasksTab = observer((props: Props) => {
	const {tab, active, onClick} = props

	return (
		<Container
			active={active}
			onClick={onClick}
		>
			<Title>{tab.title}</Title>
			<Value>{tab.value}</Value>
		</Container>
	)
})