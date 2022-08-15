import styled from "styled-components";
import searchIcon from "assets/headerSearchFieldSearchIcon.svg"
import {Backdrop} from "../Backdrop";
import {useState} from "react";
import {HeaderSearchResult} from "./HeaderSearchResult";

const Container = styled.div<{showBackdrop: boolean}>`
	position: relative;
    width: 476px;
    height: 50px;
    background: ${props => props.showBackdrop ? '#FFFFFF' : '#F7F7F8'};
    border-radius: ${props => props.showBackdrop ? '5px 5px 0 5px' : '5px'};
	display: flex;
	z-index: 10;
`
const Input = styled.input`
	flex-grow: 1;
	padding-left: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
	
	&::placeholder {
        color: #1F232C;
        opacity: 0.5;
	}
`
const Icon = styled.img<{showBackdrop: boolean}>`
    border-radius: ${props => props.showBackdrop ? '5px 5px 0 5px' : '5px'};
`

export const HeaderSearch = () => {
	const [value, setValue] = useState("")
	const [showBackdrop, setShowBackdrop] = useState(false)

	return (
		<>
			<Container showBackdrop={showBackdrop}>
				<Icon src={searchIcon} showBackdrop={showBackdrop} alt={""} />
				<Input
					value={value}
					placeholder={"Название проекта..."}
					onChange={event => setValue(event.target.value)}
					onFocus={() => setShowBackdrop(true)}
					onBlur={() => setShowBackdrop(false)}
				/>
				{showBackdrop && value.length > 0 && <HeaderSearchResult searchQuery={value}/>}
			</Container>
			{showBackdrop && <Backdrop opacity={0.7} />}
		</>
	)
}