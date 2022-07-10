import styled from "styled-components";
import bg from "../../images/loginPageBg.jpg"
import UserStore from "../../store/userStore";
import loginPageLogo from "../../images/loginPageLogo.svg";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react";

const Container = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 200px;
  padding-left: 50px;
`
const Header = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  letter-spacing: 0.04em;
  color: white;
`
const Logotype = styled.img`
	position: absolute;
	top: 60px;
	left: 60px;
`
const LogoutButton = styled.button`
  font-family: 'Raleway'; 
  width: 195px; 
  height: 40px;
  position: absolute;
  font-size: 20px;
  top: 60px;
  right: 60px;
  color: white;
  border: white solid 1px;
  border-radius: 5px;
  box-sizing: border-box;
  
  &:hover {
    border-color: aquamarine;
    color: aquamarine;
  }
`

export const WelcomePage = observer(() => {
  const userStore = UserStore
  const navigate = useNavigate()

  const logout = () => {
    userStore.logout()
    navigate("/login", {replace: true})
  }

  return (
    <Container>
      <Logotype src={loginPageLogo} />
      <Header>
        Добро пожаловать, <br/> {userStore.user?.email}
      </Header>
      <LogoutButton onClick={logout}>
        Выйти
      </LogoutButton>
    </Container>
  )
})