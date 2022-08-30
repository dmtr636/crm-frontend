import styled from "styled-components";
import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import closeIcon from "assets/dialog/dialogClose.svg"
import {defaultDialog} from "../../../constants/dialog/defaultDialog";
import {useStore} from "../../../hooks/hooks";

const Header = styled.div`
    height: 102px;
    background: #1F232C;
	padding: 0 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Title = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`
const CloseButton = styled.button`
	background: url(${closeIcon});
    width: 48px;
    height: 48px;

	&:hover {
		opacity: 0.85;
	}
`

export const ProjectInfoDrawerHeader = observer((props: {onClose: () => void}) => {
	const store = useStore()

	return (
		<Header>
			<Title>
				{store.projectInfoDrawerStore.project?.name}
			</Title>
			<CloseButton onClick={props.onClose}/>
		</Header>
	)
})