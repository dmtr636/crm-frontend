import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {backdropStore} from "../../../store/backdropStore";

const Container = styled.button`
	width: 100%;
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
	border-radius: 5px;
	
	&:hover {
		background: #F1F1F1;
	}
`

export const HeaderSearchResultItem = (props: {text: string; projectId?: number}) => {
	const navigate = useNavigate()

	const handleClick = () => {
		if (props.projectId) {
			navigate(`/projects/${props.projectId}`)
			backdropStore.setIsShowBackdrop(false)
		}
	}

	return (
		<Container onClick={handleClick}>
			{props.text}
		</Container>
	)
}