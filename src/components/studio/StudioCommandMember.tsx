import {observer} from "mobx-react";
import {IMember} from "../../interfaces/IMember";
import styled from "styled-components";
import {url} from "../../utils/utils";
import editButton from "assets/common/editButton.svg"
import messageButton from "assets/common/messageButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {studioCommandDialog} from "../../constants/dialog/studioCommandDialog";

const Container = styled.div`
	margin-bottom: 26px;
	height: 76px;
	background: white;
    border: 3px solid #1F232C;
    border-radius: 5px;
	display: flex;
	align-items: center;
	column-gap: 26px;
	padding: 0 26px;
`
const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`
const Column = styled.div`
	margin-right: auto;
`
const Role = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: rgba(31, 35, 44, 0.7);
	margin-bottom: 10px;
`
const Name = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #1F232C;
`
const Button = styled.button<{src: string}>`
	background: url(${props => props.src});
    width: 34px;
    height: 34px;
	
	&:hover {
		opacity: 0.85;
	}
`

export const StudioCommandMember = observer((props: {member: IMember}) => {
	const {member} = props

	const handleEditClick = () => {
		dialogStore.open(DialogType.edit, studioCommandDialog, member, member.id)
	}

	const getAvatarUrl = () => {
		if (member.avatar.length) {
			return url(member.avatar)
		} else {
			return `https://ui-avatars.com/api/?name=${member.name}`
		}
	}

	return (
		 <Container>
			 <Avatar src={getAvatarUrl()} />
			 <Column>
				 <Role>{member.role}</Role>
				 <Name>{member.name}</Name>
			 </Column>
			 <Button src={editButton} onClick={handleEditClick} />
			 <Button src={messageButton} onClick={() => window.open(member.telegram, "_blank")} />
		 </Container>
	)
})