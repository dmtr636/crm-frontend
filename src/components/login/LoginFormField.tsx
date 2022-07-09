import styled from "styled-components";
import emailIcon from "../../images/emailFieldIcon.svg"
import passwordIcon from "../../images/passwordFieldIcon.svg"
import showPasswordIcon from "../../images/showPasswordIcon.svg"
import {useRef, useState} from "react";

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

const Input = styled.input`
  background: none;
  border: none;
  outline: 0;
  
  height: 100%;
  width: 100%;
  
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.03em;
  color: #1F232C;
  
  &:focus {
    color: #1F232C;
  }
`
const ShowPasswordButton = styled.button`
  background-image: url(${showPasswordIcon});
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  
  &:hover {
    opacity: 0.75;
  }
`

type Props = {
  type?: "email" | "password"
}

export const LoginFormField = (props: Props) => {
  const ref = useRef(null)
  const [showPassword, setShowPassword] = useState(false)

  let inputType = props.type || ""
  if (showPassword) {
    inputType = "text"
  }

  const focusInput = () => {
    (ref.current as unknown as HTMLInputElement)?.focus()
  }

  return (
    <Container onClick={focusInput}>
      {props.type === EMAIL && <img src={emailIcon} alt={""} />}
      {props.type === PASSWORD && <img src={passwordIcon} alt={""} />}

      <Input type={inputType} ref={ref}/>

      {props.type === PASSWORD &&
          <ShowPasswordButton onClick={() => setShowPassword(!showPassword)}/>
      }
    </Container>
  )
}