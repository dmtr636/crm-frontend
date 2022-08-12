import {ReactNode} from "react";
import styled from "styled-components";

const Layout = styled.div`
	height: 100vh;
	display: flex;
`

export const HomeLayout = (props: {children: ReactNode}) => {
	return (
		<Layout>
			{props.children}
		</Layout>
	)
}