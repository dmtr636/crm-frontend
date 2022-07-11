import styled from "styled-components";
import {device} from "../../constants/breakpoints";
import LoginStore from "../../store/loginStore";
import React from "react";
import {LOGIN_ENDPOINT} from "../../api/endoints";

const Form = styled.form`
  width: 580px;
  max-height: 880px;
  box-sizing: border-box;
  flex-grow: 1;
  
  padding: 40px;
  margin: 40px 0;
  
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  background: linear-gradient(229.19deg, #FFFFFF 0%, #E5ECFF 100%);
  opacity: 0.97;
  box-shadow: 0px 4px 60px #000000;
  backdrop-filter: blur(10px);
  border-radius: 5px;

  @media screen and ${device.phone} {
    width: 320px;
    max-height: 605px;
    padding: 30px 20px 50px 20px;
    row-gap: 20px;
  }
  @media screen and ${device.tablet} {
    margin: 82px 0 54px 0 ;
  }
  @media screen and ${device.tabletL} {
    margin-top: 104px;
  }
  @media screen and ${device.laptop} {
    margin-right: calc(60px + 120 * ((100vw - 1366px) / (1920 - 1366)));
  }
  @media screen and ${device.desktop} {
    margin-right: calc(180px + 60 * ((100vw - 1920px) / (2560 - 1920)));
  }
  @media screen and ${device.desktopL} {
    margin-right: 240px;
  }

  animation: fadein 1s;
  
  @keyframes fadein {
    from { 
      opacity: 0; 
    }
    to { 
      opacity: 0.97;
    }
  }
`

type Props = {
  children: JSX.Element,
  onSubmit: () => void
}

export const LoginFormContainer = (props: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("SUBMITTING")
    event.preventDefault()
    if (LoginStore.formValidated && !LoginStore.error && !LoginStore.isLogging) {
      props.onSubmit()
    }
  }

  return (
    <Form
      noValidate={true}
      onSubmit={event => onSubmit(event)}
    >
      {props.children}
    </Form>
  )
}