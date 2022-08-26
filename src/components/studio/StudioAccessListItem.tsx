import {observer} from "mobx-react";
import {IMember} from "../../interfaces/entities/IMember";
import styled from "styled-components";
import {url} from "../../utils/utils";
import editButton from "assets/common/editButton.svg"
import messageButton from "assets/common/messageButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {studioCommandDialog} from "../../constants/dialog/studioCommandDialog";
import {IAccess} from "../../interfaces/entities/IAccess";
import {studioAccessDialog} from "../../constants/dialog/studioAccessDialog";

const Container = styled.div`
	margin-bottom: 26px;
	height: 76px;
	background: white;
    border: 3px solid #1F232C;
    border-radius: 5px;
	display: flex;
	align-items: center;
	column-gap: 48px;
	padding: 0 26px 0 0;
`
const Column = styled.div`
	
`
const Label = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: rgba(31, 35, 44, 0.7);
	margin-bottom: 10px;
`
const Value = styled.div`
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
	margin-left: auto;
	
	&:hover {
		opacity: 0.85;
	}
`
const Link = styled.a`
    width: 295px;
    height: 76px;
    background: #1F232C;
    border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`

export const StudioAccessListItem = observer((props: {access: IAccess}) => {
	const {access} = props

	const handleEditClick = () => {
		dialogStore.open(DialogType.edit, studioAccessDialog, access, access.id)
	}

	const getLinkText = () => {
		if (access.link.includes("//")) {
			return access.link.split("//")[1].replace("/", "")
		} else {
			return access.link
		}
	}

	return (
		 <Container>
			 <Link href={access.link} target={"_blank"}>{getLinkText()}</Link>
			 {access.email.length > 0 &&
                 <Column>
                     <Label>{"Почта"}</Label>
                     <Value>{access.email}</Value>
                 </Column>
			 }
			 {access.password.length > 0 &&
                 <Column>
                     <Label>{"Пароль"}</Label>
                     <Value>{access.password}</Value>
                 </Column>
			 }
			 {access.pin.length > 0 &&
                 <Column>
                     <Label>{"PIN"}</Label>
                     <Value>{access.pin}</Value>
                 </Column>
			 }
			 {access.api.length > 0 &&
                 <Column>
                     <Label>{"API"}</Label>
                     <Value>{access.api}</Value>
                 </Column>
			 }
			 <Button src={editButton} onClick={handleEditClick} />
		 </Container>
	)
})