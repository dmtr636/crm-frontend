import {observer} from "mobx-react";
import styled from "styled-components";
import {colors} from "../../../theme/colors";
import {IProjectAccess} from "../../../interfaces/entities/IProjectAccess";

const Container = styled.div`
    width: 194px;
	display: flex;
	flex-direction: column;
	row-gap: 26px;
`
const Value = styled.div`
	height: 50px;
    width: 100%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
    border: 3px solid #1F232C;
	border-radius: 5px;
	padding: 17px;
	display: flex;
	align-items: center;
	
	&:last-child {
		flex-grow: 1;
	}
`
const Link = styled.a`
    width: 100%;
    height: 50px;
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

export const ProjectInfoDrawerAccessColumn = observer((props: {access: IProjectAccess}) => {
	const {access} = props

	return (
		<Container>
			<Link href={access.link} target={"_blank"}>{access.name}</Link>
			{access.email.length > 0 &&
                <Value>{access.email}</Value>
			}
			{access.login.length > 0 &&
                <Value>{access.login}</Value>
			}
			{access.password.length > 0 &&
                <Value>{access.password}</Value>
			}
			{access.api.length > 0 &&
                <Value>{access.api}</Value>
			}
		</Container>
	)
})