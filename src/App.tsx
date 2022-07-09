import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Route, Routes, useNavigate, useRoutes} from "react-router-dom";
import {WelcomePage} from "./components/welcome/WelcomePage";
import {LoginPage} from "./components/login/LoginPage";
import {LoadingPage} from "./components/loading/LoadingPage";

const AppContainer = styled.div`

`

function App() {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const email = localStorage.getItem("email") || ""
		if (email === "") {
			navigate("/login", {replace: true})
		}
		setLoading(false)
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
}

export default App;
