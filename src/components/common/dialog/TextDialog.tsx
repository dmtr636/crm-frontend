import {observer} from "mobx-react";
import styled from "styled-components";
import {dialogStore} from "../../../store/dialogStore";
import {defaultDialog} from "../../../constants/dialog/defaultDialog";

const Text = styled.div`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 110%;
  letter-spacing: 0.03em;
  color: #1F232C;
`

const getTemplate = () => {
    const template = dialogStore.data?.text?.template
    const defaultTemplate = defaultDialog.text?.template
    if (template && template[dialogStore.type]) {
        return template[dialogStore.type]
    }
    if (defaultTemplate) {
        return defaultTemplate[dialogStore.type]
    }
}

const getText = () => {
    let objectFieldName = dialogStore.data?.text?.objectFieldName
    let template = getTemplate()
    let fields = dialogStore.data?.form?.fields
    let object = fields?.find(field => field.name === objectFieldName)?.value ?? ""

    return template?.replace("{OBJECT}", object)
}

export const TextDialog = observer(() => {
    return (
        <Text>
            {getText()}
        </Text>
    )
})