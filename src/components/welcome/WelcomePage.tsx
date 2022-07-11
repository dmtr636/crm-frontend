import styled from "styled-components";
import bg from "../../images/loginPageBg.jpg"
import UserStore from "../../store/userStore";
import loginPageLogo from "../../images/loginPageLogo.svg";
import cat from "../../images/floppa_icon.png"
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react";
import {device} from "../../constants/breakpoints";

const Container = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 200px;
  padding-left: 50px;
  position: relative;
  
  @media screen and ${device.phone} {
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${device.phone} {
    height: calc(var(--vh, 1vh) * 100);
  }
`
const Header = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 140%;
  letter-spacing: 0.04em;
  color: white;

  animation: fadein 1s;
  word-wrap: break-word;
  
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  
  @media screen and ${device.phone} {
    font-size: 30px;
  }
`
const Logotype = styled.img`
	position: absolute;
	top: 60px;
	left: 60px;

  @media screen and ${device.phone} {
    top: 20px;
    left: 20px;
  }
`
const LogoutButton = styled.button`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.04em;
  color: white;
  
  width: 250px; 
  height: 50px;
  position: absolute;
  top: 60px;
  right: 60px;
  border: white solid 1px;
  border-radius: 5px;
  box-sizing: border-box;
  
  &:hover {
    border-color: aquamarine;
    color: aquamarine;
  }

  @media screen and ${device.phone} {
    width: 150px;
    height: 50px;
    font-size: 34px;
    top: 300px;
    right: unset;
    left: 20px;
  }
`
const Cat = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 400px;

  @media screen and ${device.phone} {
    height: 200px;
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
      <Cat src={cat} />
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