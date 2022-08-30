import styled from "styled-components";
import {Sidebar} from "../components/common/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import {Header} from "../components/common/header/Header";
import {observer} from "mobx-react";
import {Backdrop} from "../components/common/Backdrop";
import {backdropStore} from "../store/backdropStore";
import {Dialog} from "../components/common/dialog/Dialog";
import {useEffect} from "react";
import {useStore} from "../hooks/hooks";

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
	const store = useStore()

	useEffect(() => {
		store.memberObjectStore.fetchObjects()
		store.accessObjectStore.fetchObjects()
		store.operationsObjectStore.fetchObjects()
		store.projectObjectStore.fetchObjects()

		store.taskStore.fetchTasks()
	}, [])

	return (
		 <Layout>
			 <Sidebar/>
			 <ContentLayout>
				 <Header/>
				 <Outlet/>
			 </ContentLayout>

			 {backdropStore.isShowBackdrop && <Backdrop type={backdropStore.backdropType} />}
			 <Dialog />
		 </Layout>
	)
})