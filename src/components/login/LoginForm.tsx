import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormContainer} from "./LoginFormContainer";
import {LoginFormField} from "./LoginFormField";
import {LoginFormButton} from "./LoginFormButton";
import {LoginFormLink} from "./LoginFormLink";
import {useEffect, useState} from "react";

export const LoginForm = () => {
  const [showProblemMessage, setShowProblemMessage] = useState(false)
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      );
  };

  useEffect(() => {
    if (password.length > 0 && validateEmail(email)) {
      setValidated(true)
    } else {
      setValidated(false)
    }
  }, [email, password])

  return (
    <LoginFormContainer>
      <>
        <LoginFormHeader />
        <LoginFormField
          type={"email"}
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <LoginFormField
          type={"password"}
          value={password}
          onChange={(value) => setPassword(value)}
        />
        {showProblemMessage &&
            <LoginFormLink
                text={"Напишите Дмитрию в Telegram"}
                href={"https://t.me/dmtr636"}
            />
        }
        <LoginFormButton disabled={!validated}/>
        <LoginFormLink
          onClick={() => setShowProblemMessage(true)}
          text={"Проблема со входом"}
        />
      </>
    </LoginFormContainer>
  )
}