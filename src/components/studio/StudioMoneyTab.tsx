import {observer} from "mobx-react";
import styled from "styled-components";

const Container = styled.button<{active: boolean}>`
	padding: 26px 48px;
	background: ${props => props.active ? '#1F232C' : '#FFFFFF'};
	color: ${props => props.active ? '#FFFFFF' : '#1F232C'};
	border-radius: 5px;
	text-align: start;
`
const Name = styled.div`
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
	tab: {
		name: string,
		value?: number
	},
	active: boolean,
	onClick: () => void
}

export const StudioMoneyTab = observer((props: Props) => {
	const {active, onClick, tab} = props

	return (
		<Container
			active={active}
			onClick={onClick}
		>
			<Name>{tab.name}</Name>
			<Value>{tab.value?.toLocaleString()}</Value>
		</Container>
	)
})