import {observer} from "mobx-react";
import styled from "styled-components";
import {dateTsToString} from "../../utils/utils";
import editButton from "assets/common/editButton.svg"
import {dialogStore, DialogType} from "../../store/dialogStore";
import {IOperation} from "../../interfaces/entities/IOperation";
import {useStore} from "../../hooks/hooks";
import {createStudioMoneyDialog} from "../../constants/dialog/studioMoneyDialog";

const Container = styled.div`
    margin-bottom: 26px;
    height: 76px;
    background: white;
    border: 3px solid #1F232C;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 26px;
`

const Text = styled.div<{ type?: "purpose" | "date" | "amount" }>`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #1F232C;
    width: 33.3%;

    ${props => props.type === "date" && `
		font-family: 'Montserrat';
		font-weight: 600;
		text-align: center;
	`}

    ${props => props.type === "amount" && `
		width: initial;
		font-family: 'Montserrat';
		font-size: 24px;
		margin-left: calc(33.3% - 184px);
	`}

`

const Button = styled.button<{ src: string }>`
    background: url(${props => props.src});
    width: 34px;
    height: 34px;
    margin-left: auto;

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

export const StudioOperationsListItem = observer((props: { operation: IOperation }) => {
	const {operation} = props
	const store = useStore()

	const handleEditClick = () => {
		dialogStore.open(DialogType.edit, createStudioMoneyDialog(store), operation, operation.id)
	}

	return (
		<Container>
			<Text type={"purpose"}>
				{operation.purpose}
			</Text>
			<Text type={"date"}>
				{dateTsToString(operation.date, "number")}
			</Text>
			<Text type={"amount"}>
				{getAmountText(operation)}
			</Text>
			<Button src={editButton} onClick={handleEditClick}/>
		</Container>
	)
})