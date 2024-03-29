import styled from "styled-components";
import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import {DialogFormField} from "./DialogFormField";
import {useEffect, useState} from "react";

const Form = styled.div<{columns: number}>`
	display: grid;
	grid-template-columns: repeat(${props => props.columns}, 300px);
	grid-column-gap: 48px;
	grid-row-gap: 26px;
`

export const DialogForm = observer(() => {
	const columns = dialogStore.data?.form?.columns!
	const fields = dialogStore.data?.form?.fields
	const initialValues = dialogStore.object
	const [readyToRender, setReadyToRender] = useState(false)

	const fillFields = () => {
		if (initialValues) {
			Object.entries(initialValues).forEach(([key, value]) => {
				let field = fields?.find(field => field.name === key)
				if (field) {
					field.value = value.toString()
				}
			})
		}
		setReadyToRender(true)
	}

	useEffect(() => {
		fillFields()
	}, [])

	return (
		<>
			{readyToRender &&
                <Form columns={columns}>
					{fields?.map(field =>
						<DialogFormField field={field} key={field.name} />
					)}
                </Form>
			}
		</>
	)
})