import styled from "styled-components";
import {observer} from "mobx-react";
import {IDialogField} from "../../../interfaces/IDialogData";
import React, {useEffect, useState} from "react";
import InputMask from "react-input-mask";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import {dateToTs} from "../../../utils/utils";
import {SelectField} from "./SelectField";

registerLocale('ru', ru)

const Container = styled.div< {columns?: number} >`
	grid-column: ${props => props.columns && `span ${props.columns}`};
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
const Input = styled.input<{ validated: boolean; edited: boolean }>`
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
	
	color: ${props => props.validated && !props.edited && 'rgba(31, 35, 44, 0.7)'};
`
const DatePickerStyled = styled(DatePicker)<{ validated: boolean; edited: boolean }>`
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
	
    color: ${props => props.validated && !props.edited && 'rgba(31, 35, 44, 0.7)'};
`

export const DialogFormField = observer((props: { field: IDialogField }) => {
	const field = props.field

	const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		field.value = event.target.value
		field.validated = true
		field.edited = true
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
		field.edited = true
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
						edited={field.edited ?? false}
					/>
				)
			case "number":
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleNumberFieldChange}
						validated={field.validated ?? true}
						edited={field.edited ?? false}
					/>
				)
			case "text":
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleTextFieldChange}
						validated={field.validated ?? true}
						edited={field.edited ?? false}
					/>
				)
			case "select":
				return (
					<SelectField field={field} />
				)
			default:
				return (
					<Input
						value={field.value ?? ""}
						onChange={handleTextFieldChange}
						validated={field.validated ?? true}
						edited={field.edited ?? false}
					/>
				)
		}
	}

	return (
		<Container columns={field.columns}>
			<Label validated={field.validated ?? true}>
				{field.label}
			</Label>
			{getInputField()}
		</Container>
	)
})