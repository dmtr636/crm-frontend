import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormContainer} from "./LoginFormContainer";
import {LoginFormField} from "./LoginFormField";
import {LoginFormButton} from "./LoginFormButton";
import {LoginFormLink} from "./LoginFormLink";
import {useState} from "react";
import LoginStore from "../../store/loginStore";
import {observer} from "mobx-react";

const loginStore = LoginStore

export const LoginForm = observer(() => {
  const [showProblemMessage, setShowProblemMessage] = useState(false)

  return (
    <LoginFormContainer>
      <>
        <LoginFormHeader />
        <LoginFormField
          type={"email"}
          value={loginStore.email}
          onChange={(value) => loginStore.setEmail(value)}
        />
        <LoginFormField
          type={"password"}
          value={loginStore.password}
          onChange={(value) => loginStore.setPassword(value)}
        />
        {showProblemMessage &&
            <LoginFormLink
                text={"Напишите Дмитрию в Telegram"}
                href={"https://t.me/dmtr636"}
            />
        }
        <LoginFormButton disabled={!loginStore.formValidated}/>
        <LoginFormLink
          onClick={() => setShowProblemMessage(true)}
          text={"Проблема со входом"}
        />
      </>
    </LoginFormContainer>
  )
})