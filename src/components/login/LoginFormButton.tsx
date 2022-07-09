import styled, {css} from "styled-components";

const Button = styled.button<Props>`
  width: 100%;
  height: 76px;
  margin-top: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 100%;
  letter-spacing: 0.04em;
  color: white;

  border-radius: 5px;
  background: linear-gradient(91.32deg, #1F232C 0%, #3B4252 100%);

  ${props => props.disabled && `
    background: none;
    color: #1F232C;
    opacity: 0.5;
    border: 3px solid #1F232C;
    cursor: default;
  `}

  ${props => !props.disabled && `
    &:hover {
      background: linear-gradient(91.32deg, #363D4B 0%, #454D60 100%);
    }
    &:active {
      background: #1F232C;
    }
  `}
`

type Props = {
  disabled?: boolean,
  error?: boolean
}

export const LoginFormButton = (props: Props) => {
  return (
    <Button disabled={props.disabled} error={props.error}>
      войти
    </Button>
  )
}