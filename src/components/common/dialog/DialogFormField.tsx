import styled from "styled-components";
import {observer} from "mobx-react";
import {IDialogData, IDialogField} from "../../../interfaces/IDialogData";
import React, {FormEvent} from "react";

const Container = styled.div`
	
`
const Label = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #1F232C;
`
const Input = styled.input`
	margin-top: 26px;
    border: 3px solid #1F232C;
    border-radius: 5px;
	padding: 13px 0 13px 23px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
`

export const DialogFormField = observer((props: {field: IDialogField}) => {
	const field = props.field

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		field.value = event.target.value
	}

	return (
		<Container>
			<Label>
				{field.label}
			</Label>
			<Input value={field.value} onChange={handleChange} />
		</Container>
	)
})