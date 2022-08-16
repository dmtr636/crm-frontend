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

  color: ${props => props.error ? '#BF616A' : '#1F232C'};
  
  &:hover {
    color: #2D313A;
  }
  
  &:active {
    color: #0F131C;
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