import styled from "styled-components";
import loginPageBg from "../../images/loginPageBg.jpg"
import {LoginForm} from "./LoginForm";
import loginPageLogo from "../../images/loginPageLogo.svg"

const Container = styled.div`
  background-image: url(${loginPageBg});
  background-position: center;
  width: 100vw;
  height: 100vh;
`
const Logotype = styled.img`
  position: absolute;
  top: 60px;
  left: 60px;
`

export const LoginPage = () => {
  return (
    <Container>
      <Logotype src={loginPageLogo} />
      <LoginForm />
    </Container>
  )
}