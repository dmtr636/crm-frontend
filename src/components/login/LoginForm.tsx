import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormContainer} from "./LoginFormContainer";
import {LoginFormField} from "./LoginFormField";
import {LoginFormButton} from "./LoginFormButton";
import {LoginFormLink} from "./LoginFormLink";
import {useState} from "react";
import LoginStore from "../../store/loginStore";
import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {LoginFormMessage} from "./LoginFormMessage";

const loginStore = LoginStore

export const LoginForm = observer(() => {
  const [showProblemMessage, setShowProblemMessage] = useState(false)
  const navigate = useNavigate()

  const login = async () => {
    const isLoggedIn = await loginStore.login()
    setShowProblemMessage(false)
    if (isLoggedIn) {
      navigate("/", {replace: true})
    }
  }

  return (
    <LoginFormContainer onSubmit={login}>
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
        {(loginStore.error) &&
            <LoginFormMessage />
        }
        {showProblemMessage &&
            <LoginFormLink
                text={"Напишите Дмитрию в Telegram"}
                href={"https://t.me/dmtr636"}
            />
        }
        <LoginFormButton
          error={loginStore.error}
          disabled={!loginStore.formValidated}
        />
        <LoginFormLink
          onClick={() => {
            setShowProblemMessage(true)
            loginStore.error = false
          }}
          text={"Проблема со входом"}
        />
      </>
    </LoginFormContainer>
  )
})