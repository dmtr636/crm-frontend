import styled from "styled-components";
import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import {DialogHeader} from "./DialogHeader";
import {AddDialog} from "./AddDialog";
import {SuccessAddDialog} from "./SuccessAddDialog";

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
`

const getDialogContent = () => {
	switch (dialogStore.type) {
		case "add": return <AddDialog />
		case "successAdd": return <SuccessAddDialog />
		default: return <AddDialog />
	}
}

export const Dialog = observer(() => {
	return (
		<>
			{dialogStore.isOpen &&
                <Backdrop onClick={() => dialogStore.close()}>
                    <Container onClick={(event) => event.stopPropagation()}>
                        <DialogHeader />
                        <Content>
							{getDialogContent()}
                        </Content>
                    </Container>
                </Backdrop>
			}
		</>
	)
})