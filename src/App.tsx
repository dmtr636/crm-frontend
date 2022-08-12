import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Route, Routes, useMatch, useNavigate} from "react-router-dom";
import {WelcomePage} from "./pages/WelcomePage";
import {LoginPage} from "./pages/LoginPage";
import {LoadingPage} from "./pages/LoadingPage";
import UserStore from "./store/userStore";
import {observer} from "mobx-react";
import {HomePage} from "./pages/HomePage";
import {MainPage} from "./pages/MainPage";
import {Page404} from "./pages/Page404";
import {sidebarRoutes} from "./routes/routes";

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
					<Route path={"/"} element={<MainPage/>}>
						{sidebarRoutes.map(route =>
							route.index
								? <Route index element={route.component} />
								: <Route path={route.path} element={route.component} />
						)}
					</Route>
					<Route path={"/login"} element={<LoginPage/>} />
					<Route path={"*"} element={<Page404 />} />
				</Routes>
			}
		</AppContainer>
	);
})
