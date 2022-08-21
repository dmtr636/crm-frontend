import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import {DialogForm} from "./DialogForm";

export const FormDialog = observer(() => {
    return (
        <>
            {dialogStore.data?.form &&
                <DialogForm />
            }
        </>
    )
})