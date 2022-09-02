import styled from "styled-components";
import {observer} from "mobx-react";
import {dialogStore, DialogType} from "../../../store/dialogStore";
import {DialogHeader} from "./DialogHeader";
import {FormDialog} from "./FormDialog";
import {TextDialog} from "./TextDialog";
import {DialogActions} from "./DialogActions";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
	background: rgba(31, 35, 44, 0.7);
    z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Container = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
	z-index: 30;
	min-width: 744px;
`
const Content = styled.div`
	padding: 26px 48px;
    max-height: calc(100vh - 150px);
    overflow-y: auto;
`

const getDialogContent = () => {
	switch (dialogStore.type) {
		case DialogType.add:
		case DialogType.edit:
			return <FormDialog />
		case DialogType.successAdd:
		case DialogType.successEdit:
		case DialogType.successDelete:
		case DialogType.confirm:
			return <TextDialog />

		default: return <FormDialog />
	}
}

export const Dialog = observer(() => {
	return (
		<>
			{dialogStore.isOpen &&
                <Backdrop onClick={() => {
					//dialogStore.close()
				}}>
                    <Container onClick={(event) => event.stopPropagation()}>
                        <DialogHeader />
                        <Content>
							{dialogStore.data?.component
								?
								dialogStore.data.component
								:
								<>
									{getDialogContent()}
									<DialogActions />
								</>
							}
                        </Content>
                    </Container>
                </Backdrop>
			}
		</>
	)
})