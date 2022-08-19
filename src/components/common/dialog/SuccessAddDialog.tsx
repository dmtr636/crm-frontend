import {observer} from "mobx-react";
import styled from "styled-components";

const Text = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  letter-spacing: 0.03em;
  color: #1F232C;
`

export const SuccessAddDialog = observer(() => {
    return (
        <Text>
            добавлен
        </Text>
    )
})