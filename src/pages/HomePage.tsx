import {observer} from "mobx-react";
import userStore from "../store/userStore";
import {useNavigate} from "react-router-dom";
import {Header} from "../components/common/header/Header";
import styled from "styled-components";

const Container = styled.div`

`

export const HomePage = observer(() => {
	const navigate = useNavigate()

	const logout = () => {
		userStore.logout()
		navigate("/login", {replace: true})
	}

	return (
		<Container>
			<Header/>
		</Container>
	)
})