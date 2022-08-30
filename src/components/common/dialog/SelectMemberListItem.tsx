import {observer} from "mobx-react";
import styled from "styled-components";
import {IMember} from "../../../interfaces/entities/IMember";
import {url} from "../../../utils/utils";
import { colors } from "theme/colors";

const Container = styled.div`
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
const Button = styled.button<{selected: boolean}>`
    width: 34px;
    height: 34px;
	border-radius: 50%;
    border: 3px solid #1F232C;
	
	background: ${props => props.selected && colors.dark.default};
	
	&:hover {
		border-color: ${colors.dark.hover};
        background: ${props => props.selected && colors.dark.hover};
	}
    &:active {
        border-color: ${colors.dark.pressed};
        background: ${props => props.selected && colors.dark.pressed};
    }
`

type Props = {
	member: IMember,
	selected: boolean,
	onSelect: () => void
}

export const SelectMemberListItem = observer((props: Props) => {
	const {member, selected, onSelect} = props

	const getAvatarUrl = () => {
		if (member.avatar.length) {
			return url(member.avatar)
		} else {
			return `https://ui-avatars.com/api/?name=${member.name}`
		}
	}

	const handleClick = () => {
		if (!selected) {
			onSelect()
		}
	}

	return (
		 <Container>
			 <Avatar src={getAvatarUrl()} />
			 <Column>
				 <Role>{member.role}</Role>
				 <Name>{member.name}</Name>
			 </Column>
			 <Button onClick={handleClick} selected={selected} />
		 </Container>
	)
})