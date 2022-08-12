import styled from "styled-components";
import {HeaderSearch} from "./HeaderSearch";

const Container = styled.header`
	width: 100%;
	height: 102px;
	background: white;
	display: flex;
	align-items: center;
	padding: 0 48px;
`

export const Header = () => {
	return (
		<Container>
			<HeaderSearch />
		</Container>
	)
}