import styled from "styled-components";

const ProblemsButton = styled.a`
  align-self: center;
  
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.03em;

  background: linear-gradient(91.32deg, #1F232C 0%, #3B4252 100%);
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
`

type Props = {
  href?: string,
  text: string,
  onClick?: () => void
}


export const LoginFormLink = (props: Props) => {
  return (
    <ProblemsButton
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.onClick}
    >
      {props.text}
    </ProblemsButton>
  )
}