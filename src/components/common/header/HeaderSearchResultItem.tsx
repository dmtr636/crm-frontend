import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	display: flex;
	align-items: center;
	padding: 0 26px;
	cursor: pointer;
`

export const HeaderSearchResultItem = (props: {text: string}) => {
	return (
		<Container>
			{props.text}
		</Container>
	)
}