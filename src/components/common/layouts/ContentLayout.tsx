import {ReactNode} from "react";
import styled from "styled-components";

const Layout = styled.div`
	height: 100vh;
	flex-grow: 1;
	overflow-y: auto;
    background: #F7F7F8;
`

export const ContentLayout = (props: {children: ReactNode}) => {
	return (
		<Layout>
			{props.children}
		</Layout>
	)
}