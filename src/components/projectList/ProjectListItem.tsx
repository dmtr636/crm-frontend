import {observer} from "mobx-react";
import styled from "styled-components";
import {dateTsToString} from "../../utils/utils";
import {IOperation} from "../../interfaces/entities/IOperation";
import {IProject} from "../../interfaces/entities/IProject";
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    margin-bottom: 48px;
    padding: 0 48px;
    height: 84px;
    background: #1F232C;
    border-radius: 5px;
    display: flex;
    align-items: center;
    column-gap: 48px;
`
const Name = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
`
const Date = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin-left: auto;
`

const Button = styled.button`
    width: 202px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	
    &:hover {
        opacity: 0.85;
    }
`

const getAmountText = (operation: IOperation) => {
	let strNumber = operation.amount.toLocaleString()
	if (operation.type === "income") {
		return `+ ${strNumber}`
	} else {
		return `- ${strNumber}`
	}
}

export const ProjectListItem = observer((props: { project: IProject }) => {
	const {project} = props
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`../${project.id}`)
	}

	return (
		<Container>
			<Name>{project.name}</Name>
			<Date>{dateTsToString(project.deadline, "number")}</Date>
			<Button onClick={handleClick}>
				Открыть проект
			</Button>
		</Container>
	)
})