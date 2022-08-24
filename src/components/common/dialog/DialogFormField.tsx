import styled from "styled-components";
import {observer} from "mobx-react";
import {IDialogField} from "../../../interfaces/IDialogData";
import React, {useEffect, useState} from "react";
import InputMask from "react-input-mask";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {dateToTs} from "../../../utils/utils";

registerLocale('ru', ru)

const Container = styled.div`

`
const Label = styled.div<{ validated: boolean }>`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: ${props => props.validated ? '#1F232C' : '#BF616A'};
`
const Input = styled.input<{ validated: boolean }>`
    width: 100%;
    margin-top: 26px;
    border: 3px solid;
    border-color: ${props => props.validated ? '#1F232C' : '#BF616A'};
    border-radius: 5px;
    padding: 13px 0 13px 23px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
`
const DatePickerStyled = styled(DatePicker)<{ validated: boolean }>`
    width: 100%;
    margin-top: 26px;
    border: 3px solid;
    border-color: ${props => props.validated ? '#1F232C' : '#BF616A'};
    border-radius: 5px;
    padding: 13px 0 13px 23px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
`

export const DialogFormField = observer((props: { field: IDialogField }) => {
	const field = props.field

	const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		field.value = event.target.value
		field.validated = true
	}

	const handleDateFieldChange = (date: Date) => {
		if (date) {
			setStartDate(date)
			field.value = dateToTs(date).toString()
			field.validated = true
		}
	}

	const handleNumberFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length === 0) {
			field.value = event.target.value
		} else if (!isNaN(Number(event.target.value))) {
			field.value = Math.floor(Number(event.target.value)).toString()
			field.validated = true
		}
	}

	const [startDate, setStartDate] = useState<Date | null>(null);

	useEffect(() => {
		if (field.type === "date" && field.value) {
			setStartDate(new Date(Number(field.value) * 1000))
		}
	}, [field.type, field.value])

	const getInputField = () => {
		switch (field.type) {
			case "date":
				return (
					<DatePickerStyled
						selected={startDate}
						onChange={handleDateFieldChange}
						locale={"ru"}
						validated={field.validated ?? true}
						dateFormat="dd.MM.yyyy"
					/>
				)
			case "number":
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleNumberFieldChange}
						validated={field.validated ?? true}
					/>
				)
			case "text":
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleTextFieldChange}
						validated={field.validated ?? true}
					/>
				)
			default:
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleTextFieldChange}
						validated={field.validated ?? true}
					/>
				)
		}
	}

	return (
		<Container>
			<Label validated={field.validated ?? true}>
				{field.label}
			</Label>
			{getInputField()}
		</Container>
	)
})