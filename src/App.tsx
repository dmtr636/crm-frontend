import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Route, Routes, useNavigate} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {LoadingPage} from "./pages/LoadingPage";
import {observer} from "mobx-react";
import {MainPage} from "./pages/MainPage";
import {Page404} from "./pages/Page404";
import {memberStore} from "./store/memberStore";
import {HomePage} from "./pages/main/HomePage";
import {ProjectListPage} from "./pages/main/ProjectListPage";
import {ProjectPage} from "./pages/main/ProjectPage";
import {StudioPage} from 'pages/main/StudioPage';

const AppContainer = styled.div`

`

export const App = observer(() => {
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	const authenticate = async () => {
		const isAuthenticated = await memberStore.authenticate()
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
				<LoadingPage/>
				:
				<Routes>
					<Route path={"/"} element={<MainPage/>}>
						<Route index element={<HomePage/>}/>
						<Route path={"projects"}>
							<Route index element={<ProjectListPage/>}/>
							<Route path={":id"} element={<ProjectPage/>}/>
						</Route>
						<Route path={"studio"} element={<StudioPage/>}/>
					</Route>
					<Route path={"/login"} element={<LoginPage/>}/>
					<Route path={"*"} element={<Page404/>}/>
				</Routes>
			}
		</AppContainer>
	);
})
