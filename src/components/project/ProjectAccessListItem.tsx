import {observer} from "mobx-react";
import styled from "styled-components";
import editButton from "assets/common/editButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {IProjectAccess} from "../../interfaces/entities/IProjectAccess";
import {createProjectAccessDialogData} from "../../constants/dialog/projectAccessDialog";
import {useStore} from "../../hooks/hooks";
import {colors} from "../../theme/colors";

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
	
	&:hover {
		background: ${colors.dark.hover};
	}
	
	&:active {
		background: ${colors.dark.pressed};
	}
`

export const ProjectAccessListItem = observer((props: {access: IProjectAccess}) => {
	const {access} = props
	const store = useStore()

	const handleEditClick = () => {
		dialogStore.open(DialogType.edit, createProjectAccessDialogData(store), access, access.id)
	}

	return (
		 <Container>
			 <Link href={access.link} target={"_blank"}>{access.name}</Link>
			 {access.email.length > 0 &&
                 <Column>
                     <Label>{"Почта"}</Label>
                     <Value>{access.email}</Value>
                 </Column>
			 }
			 {access.login.length > 0 &&
                 <Column>
                     <Label>{"Логин"}</Label>
                     <Value>{access.login}</Value>
                 </Column>
			 }
			 {access.password.length > 0 &&
                 <Column>
                     <Label>{"Пароль"}</Label>
                     <Value>{access.password}</Value>
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