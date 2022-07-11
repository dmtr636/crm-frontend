import styled from "styled-components";
import {device} from "../../constants/breakpoints";

const Message = styled.div`
  align-self: center;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.03em;
  color: #BF616A;
  white-space: pre-line;
  text-align: center;
  margin-top: 10px;
  
  @media screen and ${device.phone} {
    font-size: 16px;
  }
`

export const LoginFormMessage = () => {
  return (
    <Message>
      {
        "Пользователя с такими данными\n" +
        "не существует"
      }
    </Message>
  )
}