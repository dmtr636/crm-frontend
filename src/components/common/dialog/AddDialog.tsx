import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import {DialogForm} from "./DialogForm";
import {DialogActions} from "./DialogActions";

export const AddDialog = observer(() => {
    return (
        <>
            {dialogStore.data?.form &&
                <DialogForm />
            }
            <DialogActions />
        </>
    )
})