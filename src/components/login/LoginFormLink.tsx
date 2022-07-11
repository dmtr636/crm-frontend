import styled from "styled-components";
import {device} from "../../constants/breakpoints";

const ProblemsButton = styled.a<{error?: boolean}>`
  align-self: center;
  
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.03em;
  margin-top: 10px;

  background: ${props => props.error ? '#BF616A' : 'linear-gradient(91.32deg, #1F232C 0%, #3B4252 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  &:hover {
    background: linear-gradient(91.32deg, #363D4B 0%, #454D60 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  &:active {
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  @media screen and ${device.phone} {
    font-size: 16px;
  }
`

type Props = {
  href?: string,
  text: string,
  error?: boolean,
  onClick?: () => void
}


export const LoginFormLink = (props: Props) => {
  return (
    <ProblemsButton
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
      error={props.error}
    >
      {props.text}
    </ProblemsButton>
  )
}