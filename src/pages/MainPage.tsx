import styled from "styled-components";
import {Sidebar} from "../components/common/sidebar/Sidebar";

const Layout = styled.div`
	height: 100vh;
	display: flex;
`

export const MainPage = () => {
	return (
		 <Layout>
			<Sidebar />
		 </Layout>
	)
}