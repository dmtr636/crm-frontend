import styled from "styled-components";
import bg from "../../images/loginPageBg.jpg"

const Container = styled.div`
  background-image: url(${bg});
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingPage = () => {
  return (
    <Container>
    </Container>
  )
}