import {observer} from "mobx-react";
import styled from "styled-components";
import {useOuterClick, useStore} from "../../../hooks/hooks";
import {colors} from "../../../theme/colors";
import {useNavigate} from "react-router-dom";

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
    background: rgba(31, 35, 44, 0.7);
	z-index: 10;
`
const Container = styled.div`
	position: absolute;
	top: 102px;
	right: 48px;
    background: #FFFFFF;
    border-radius: 0px 0px 5px 5px;
	
	padding: 0;
`
const Item = styled.button`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	padding: 17px 26px;
	
	&:hover {
		color: ${colors.dark.hover}
	}
	&:active {
		color: ${colors.dark.pressed}
	}
`

export const HeaderMemberMenu = observer((props: {onClose: () => void}) => {
	const {onClose} = props
	const store = useStore()
	const navigate = useNavigate()

	const handleLogout = () => {
		store.memberStore.logout()
		navigate("/login", {replace: true})
	}

	return (
		<Background onClick={() => onClose()}>
			<Container onClick={(event) => event.stopPropagation()}>
				<Item onClick={handleLogout}>
					Выйти
				</Item>
			</Container>
		</Background>
	)
})