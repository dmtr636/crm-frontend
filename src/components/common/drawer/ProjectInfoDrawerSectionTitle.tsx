import {observer} from "mobx-react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	column-gap: 26px;
	align-items: center;
	margin-bottom: 48px;
`
const Title = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	text-transform: uppercase;
`
const Line = styled.div`
	height: 3px;
	background: #1F232C;
	width: 100%;
`

type Props = {
	title: string
}

export const ProjectInfoDrawerSectionTitle = observer((props: Props) => {
	const {title} = props

	return (
		<Container>
			<Title>
				{title}
			</Title>
			<Line />
		</Container>
	)
})