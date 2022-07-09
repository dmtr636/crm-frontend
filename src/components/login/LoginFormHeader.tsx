import styled from "styled-components";

const Text = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0.04em;
  color: #1F232C;
  white-space: pre-line;
  
  display: flex;
  align-items: center;
  height: 121px;
`

export const LoginFormHeader = () => {
  return (
    <Text>
      {
        `Логинься,
        поехали`
      }
    </Text>
 )
}