import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Route, Routes, useMatch, useNavigate} from "react-router-dom";
import {WelcomePage} from "./components/welcome/WelcomePage";
import {LoginPage} from "./components/login/LoginPage";
import {LoadingPage} from "./components/loading/LoadingPage";
import UserStore from "./store/userStore";
import {observer} from "mobx-react";

const AppContainer = styled.div`

`

export const App = observer(() => {
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()
	const userStore = UserStore

	const authenticate = async () => {
		const isAuthenticated = await userStore.authenticate()
		if (!isAuthenticated) {
			navigate("/login", {replace: true})
		}
		setLoading(false)
	}

	useEffect(() => {
		authenticate()
	}, [])

	return (
		<AppContainer>
			{loading
				?
				<LoadingPage />
				:
				<Routes>
					<Route path={"/"} element={<WelcomePage/>} />
					<Route path={"/login"} element={<LoginPage/>} />
					<Route path={"*"} element={<WelcomePage />} />
				</Routes>
			}
		</AppContainer>
	);
})
