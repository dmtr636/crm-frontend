import styled from "styled-components";

const Text = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
`

export const Loading = () => {
	return (
		<Text>
			ЗАГРУЗКА...
		</Text>
	)
}