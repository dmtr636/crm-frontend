import styled from "styled-components";
import {device} from "../../constants/breakpoints";

const Container = styled.div`
  width: 580px;
  height: 880px;

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  padding: 40px;
  
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  background: linear-gradient(229.19deg, #FFFFFF 0%, #E5ECFF 100%);
  opacity: 0.97;
  box-shadow: 0px 4px 60px #000000;
  backdrop-filter: blur(10px);
  border-radius: 5px;

  @media ${device.laptop} {
    right: calc(60px + 120 * ((100vw - 1366px) / (1920 - 1366)));
  }
  @media ${device.desktop} {
    right: calc(180px + 60 * ((100vw - 1920px) / (2560 - 1920)));
  }
  @media ${device.desktopL} {
    right: 240px;
  }

  animation: fadein 1s;
  
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`

type Props = { children: JSX.Element }

export const LoginFormContainer = (props: Props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}