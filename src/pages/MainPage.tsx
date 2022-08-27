import styled from "styled-components";
import {Sidebar} from "../components/common/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {Header} from "../components/common/header/Header";
import {observer} from "mobx-react";
import {Backdrop} from "../components/common/Backdrop";
import {appStore} from "../store/backdropStore";
import {Dialog} from "../components/common/dialog/Dialog";
import {useEffect} from "react";
import {accessObjectStore, memberObjectStore, operationsObjectStore, projectObjectStore} from "../store/objectStore";

const Layout = styled.div`
	height: 100vh;
	display: flex;
`
const ContentLayout = styled.div`
	height: 100vh;
	flex-grow: 1;
	overflow-y: auto;
    background: #F7F7F8;
`

export const MainPage = observer(() => {
	useEffect(() => {
		memberObjectStore.fetchObjects()
		accessObjectStore.fetchObjects()
		operationsObjectStore.fetchObjects()
		projectObjectStore.fetchObjects()
	}, [])

	return (
		 <Layout>
			 <Sidebar/>
			 <ContentLayout>
				 <Header/>
				 <Outlet/>
			 </ContentLayout>

			 {appStore.isShowBackdrop && <Backdrop type={appStore.backdropType} />}
			 <Dialog />
		 </Layout>
	)
})