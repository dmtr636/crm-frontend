import {observer} from "mobx-react";
import styled from "styled-components";
import {dialogStore} from "../../../store/dialogStore";

const Text = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  letter-spacing: 0.03em;
  color: #1F232C;
`

const getText = () => {
    let objectFieldName = dialogStore.data?.text?.successAddObjectFieldName
    let template = dialogStore.data?.text?.successAdd
    let fields = dialogStore.data?.form?.fields
    let object = fields?.find(field => field.name === objectFieldName)?.value ?? ""

    return template?.replace("{OBJECT}", object)
}

export const SuccessAddDialog = observer(() => {
    return (
        <Text>
            {getText()}
        </Text>
    )
})