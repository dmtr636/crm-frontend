import styled from "styled-components";
import searchIcon from "assets/header/headerSearchFieldSearchIcon.svg"
import {Backdrop} from "../Backdrop";
import {useEffect, useState} from "react";
import {HeaderSearchResult} from "./HeaderSearchResult";
import {backdropStore} from "../../../store/backdropStore";
import {observer} from "mobx-react";

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

export const HeaderSearch = observer(() => {
	const [value, setValue] = useState("")

	useEffect(() => {
		if (!backdropStore.isShowBackdrop) {
			setValue("")
		}
	}, [backdropStore.isShowBackdrop])

	return (
		<>
			<Container showBackdrop={backdropStore.isShowBackdrop}>
				<Icon src={searchIcon} showBackdrop={backdropStore.isShowBackdrop} alt={""} />
				<Input
					value={value}
					placeholder={"Название проекта..."}
					onChange={event => setValue(event.target.value)}
					onFocus={() => {
						backdropStore.setIsShowBackdrop(true)
						backdropStore.setBackdropType("content")
					}}
				/>
				{backdropStore.isShowBackdrop && value.length > 0 &&
					<HeaderSearchResult searchQuery={value}/>
				}
			</Container>
		</>
	)
})