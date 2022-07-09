import {LoginFormHeader} from "./LoginFormHeader";
import {LoginFormContainer} from "./LoginFormContainer";
import {LoginFormField} from "./LoginFormField";

export const LoginForm = () => {
  return (
    <LoginFormContainer>
      <>
        <LoginFormHeader />
        <LoginFormField type={"email"} />
        <LoginFormField type={"password"} />
      </>
    </LoginFormContainer>
  )
}