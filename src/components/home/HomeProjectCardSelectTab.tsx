import styled from "styled-components";
import {observer} from "mobx-react";
import {useContext} from "react";
import {HomeProjectContext} from "./HomeProject";

const Tab = styled.button<{active: boolean}>`
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
	value: "all" | "completed",
	text: string
}

export const HomeProjectCardSelectTab = observer((props: Props) => {
	const project = useContext(HomeProjectContext)!
	const active = project.tasks_filter === props.value

	return (
		<Tab
			active={active}
			onClick={() => {project.tasks_filter = props.value}}
		>
			{props.text}
		</Tab>
	)
})