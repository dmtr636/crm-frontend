import {IDialogField, ISelectOption} from "../../../interfaces/IDialogData";
import styled from "styled-components";
import {useMemo, useState} from "react";
import {observer} from "mobx-react";
import {colors} from "../../../theme/colors";
import arrow from "assets/dialog/selectArrow.svg"

const Container = styled.div`
    width: 100%;
    margin-top: 26px;
    border: #1F232C 3px solid;
    border-radius: 5px;
    padding: 13px 0 13px 23px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
	cursor: pointer;
	user-select: none;
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	position: relative;
`
const Item = styled.div<{ edited: boolean }>`
	color: ${props => props.edited ? colors.dark.default : 'rgba(31, 35, 44, 0.7)'};
	
	&:hover {
		color: ${props => props.edited && colors.dark.hover};
	}
	
	&:active {
        color: ${props => props.edited && colors.dark.pressed};
	}
`
const Arrow = styled.img<{ expanded: boolean }>`
	position: absolute;
	top: 5px;
	right: 23px;
	
	transform: ${props => props.expanded && 'rotate(180deg)'};
	
	&:hover {
		opacity: 0.85;
	}
`

type Props = {
	field: IDialogField
}

export const SelectField = observer((props: Props) => {
	const {field} = props
	const [expanded, setExpanded] = useState(false)

	const value = useMemo(
		() => field.selectOptions?.find(option => option.id === field.value)?.value,
		[field.selectOptions, field.value]
	)

	const availableOptions = useMemo(
		() => field.selectOptions?.filter(option => option.id !== field.value),
		[field.selectOptions, field.value]
	)

	const handleChange = (option: ISelectOption) => {
		field.value = option.id
		field.edited = true
	}

	return (
		<Container onClick={() => setExpanded(!expanded)}>
			<Item edited={field.edited ?? false}>
				{value}
			</Item>

			{expanded &&
				availableOptions?.map(option =>
					<Item
						onClick={() => handleChange(option)}
						edited={true}
					>
						{option.value}
					</Item>
				)
			}

			<Arrow src={arrow} expanded={expanded}/>
		</Container>
	)
})