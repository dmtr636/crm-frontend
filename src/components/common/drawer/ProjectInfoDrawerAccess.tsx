import {observer} from "mobx-react";
import styled from "styled-components";
import {colors} from "../../../theme/colors";
import {IProjectAccess} from "../../../interfaces/entities/IProjectAccess";

const Container = styled.div`
	margin-bottom: 26px;
	height: 60px;
	background: white;
    border: 3px solid #1F232C;
    border-radius: 5px;
	display: flex;
	align-items: center;
	column-gap: 32px;
	padding: 0 26px 0 0;
`
const Column = styled.div`
	
`
const Label = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: rgba(31, 35, 44, 0.7);
	margin-bottom: 7px;
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
const Link = styled.a`
    width: 135px;
    height: 60px;
    background: #1F232C;
    border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
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

export const ProjectInfoDrawerAccess = observer((props: {access: IProjectAccess}) => {
	const {access} = props

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
		</Container>
	)
})