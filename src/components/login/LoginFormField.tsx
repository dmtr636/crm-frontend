import styled from "styled-components";
import emailIcon from "../../assets/login/emailFieldIcon.svg"
import passwordIcon from "../../assets/login/passwordFieldIcon.svg"
import showPasswordIcon from "../../assets/login/showPasswordIcon.svg"
import hidePasswordIcon from "../../assets/login/hidePasswordIcon.svg"
import {useEffect, useRef, useState} from "react";
import {device} from "../../constants/breakpoints";
import {preloadImages} from "../../utils/utils";
import {useStore} from "../../hooks/hooks";

const EMAIL = "email"
const PASSWORD = "password"

const Container = styled.div<{ error: boolean }>`
    width: 100%;
    height: 76px;
    border: 3px solid #1F232C;
    border-radius: 5px;
    padding: 0 21px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    column-gap: 21px;

    border-color: ${props => props.error && '#BF616A'};

    @media screen and ${device.phone} {
        width: 280px;
        height: 48px;
        padding: 0 12px;
        column-gap: 12px;
        border-width: 2px;
    }
`
const Input = styled.input<{ showDots: boolean; error: boolean }>`
    background: none;
    border: none;
    outline: 0;
    height: 100%;
    width: 100%;
    font-family: ${props => props.showDots ? 'Verdana' : 'Montserrat'};
    letter-spacing: ${props => props.showDots ? `0.3em` : `0.03em`};
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: ${props => props.error ? '#BF616A' : '#1F232C'} !important;
    padding-bottom: ${props => props.showDots ? `4px` : 0};

    -webkit-text-fill-color: ${props => props.error ? '#BF616A' : '#1F232C'} !important;

    &:focus {
        color: ${props => props.error ? '#BF616A' : '#1F232C'} !important;
    }

    @media screen and ${device.phone} {
        font-size: 16px;
        letter-spacing: 0.03em;
    }
`
const TogglePasswordVisibilityButton = styled.button<{ icon: string; error: boolean }>`
    background-image: url(${props => props.icon});
    width: 34px;
    height: 34px;
    flex-shrink: 0;

    ${props => props.error && `
    	filter: brightness(0) saturate(100%) invert(48%) sepia(18%) saturate(1292%) hue-rotate(305deg) brightness(91%) contrast(89%);
  	`}
	
    &:hover {
        opacity: 0.8;
    }

    @media screen and ${device.phone} {
        width: 24px;
        height: 24px;
        background-size: contain;
    }
`
const Img = styled.img<{ error: boolean }>`
    ${props => props.error && `
    	filter: brightness(0) saturate(100%) invert(48%) sepia(18%) saturate(1292%) hue-rotate(305deg) brightness(91%) contrast(89%);
  	`} 
	@media screen and ${device.phone} {
        width: 24px;
        height: 24px;
    }
`

type Props = {
	type?: "email" | "password",
	value: string,
	onChange: (value: string) => void
}

export const LoginFormField = (props: Props) => {
	const LoginStore = useStore().loginStore
	const ref = useRef(null)
	const [showPassword, setShowPassword] = useState(false)

	const focusInput = () => {
		(ref.current as unknown as HTMLInputElement)?.focus();
	}

	useEffect(() => {
		preloadImages([hidePasswordIcon])
	}, []);

	let inputType = props.type || ""
	if (showPassword) {
		inputType = "text"
	}

	return (
		<Container
			error={LoginStore.error}
		>
			{props.type === EMAIL &&
                <Img
                    src={emailIcon}
                    alt={""}
                    onClick={focusInput}
                    error={LoginStore.error}
                />
			}
			{props.type === PASSWORD &&
                <Img
                    src={passwordIcon}
                    alt={""}
                    onClick={focusInput}
                    error={LoginStore.error}
                />
			}

			<Input
				type={inputType}
				ref={ref}
				showDots={!showPassword && props.type === PASSWORD}
				value={props.value}
				onChange={(event) => props.onChange(event.target.value)}
				error={LoginStore.error}
				autoComplete={"new-password"}
			/>

			{props.type === PASSWORD &&
                <TogglePasswordVisibilityButton
                    type={"button"}
                    icon={showPassword ? hidePasswordIcon : showPasswordIcon}
                    onClick={() => setShowPassword(!showPassword)}
                    error={LoginStore.error}
                    onKeyDown={event => {
						if (event.key === 'Enter') {
							event.preventDefault()
						}
					}}
                />
			}
		</Container>
	)
}