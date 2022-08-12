import styled from "styled-components";
import {Sidebar} from "../components/common/sidebar/Sidebar";
import {ContentLayout} from "../components/common/layouts/ContentLayout";
import {Outlet} from "react-router-dom";

const Layout = styled.div`
	height: 100vh;
	display: flex;
`

export const MainPage = () => {
	return (
		 <Layout>
			 <Sidebar/>
			 <ContentLayout>
				 <Outlet/>
			 </ContentLayout>
		 </Layout>
	)
}