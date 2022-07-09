import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormContainer} from "./LoginFormContainer";
import {LoginFormField} from "./LoginFormField";
import {LoginFormButton} from "./LoginFormButton";
import {LoginFormLink} from "./LoginFormLink";
import {useState} from "react";

export const LoginForm = () => {
  const [showProblemMessage, setShowProblemMessage] = useState(false)

  return (
    <LoginFormContainer>
      <>
        <LoginFormHeader />
        <LoginFormField type={"email"} />
        <LoginFormField type={"password"} />
        {showProblemMessage &&
            <LoginFormLink
                text={"Напишите Дмитрию в Telegram"}
                href={"https://t.me/dmtr636"}
            />
        }
        <LoginFormButton />
        <LoginFormLink
          onClick={() => setShowProblemMessage(true)}
          text={"Проблема со входом"}
        />
      </>
    </LoginFormContainer>
  )
}