import styled from "styled-components";
import emailIcon from "../../images/emailFieldIcon.svg"
import passwordIcon from "../../images/passwordFieldIcon.svg"
import showPasswordIcon from "../../images/showPasswordIcon.svg"
import hidePasswordIcon from "../../images/hidePasswordIcon.svg"
import {useEffect, useRef, useState} from "react";

const EMAIL = "email"
const PASSWORD = "password"

const Container = styled.div`
  width: 100%;
  height: 76px;
  border: 3px solid #1F232C;
  border-radius: 5px;
  padding: 0 21px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  column-gap: 21px;
`
const Input = styled.input<{ showDots: boolean }>`
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
  color: #1F232C;
  padding-bottom: ${props => props.showDots ? `4px` : 0};

  &:focus {
    color: #1F232C;
  }
`
const TogglePasswordVisibilityButton = styled.button<{ icon: string }>`
  background-image: url(${props => props.icon});
  width: 34px;
  height: 34px;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }
`

type Props = {
  type?: "email" | "password"
}

export const LoginFormField = (props: Props) => {
  const ref = useRef(null)
  const [showPassword, setShowPassword] = useState(false)

  const focusInput = () => {
    (ref.current as unknown as HTMLInputElement)?.focus()
  }

  useEffect(() => {
    //preloading image
    [hidePasswordIcon].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  let inputType = props.type || ""
  if (showPassword) {
    inputType = "text"
  }

  return (
    <Container>
      {props.type === EMAIL && <img src={emailIcon} alt={""} onClick={focusInput}/>}
      {props.type === PASSWORD && <img src={passwordIcon} alt={""} onClick={focusInput}/>}

      <Input type={inputType} ref={ref} showDots={!showPassword && props.type === PASSWORD}/>

      {props.type === PASSWORD &&
          <TogglePasswordVisibilityButton
              icon={showPassword ? hidePasswordIcon : showPasswordIcon}
              onClick={() => setShowPassword(!showPassword)}
          />
      }
    </Container>
  )
}