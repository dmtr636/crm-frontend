import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 80px;
    font-family: 'Raleway';
`

export const Page404 = () => {
	return (
		<Container>
			Такой страницы нет
		</Container>
	)
}