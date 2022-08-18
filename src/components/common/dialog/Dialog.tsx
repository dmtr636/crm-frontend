import styled from "styled-components";
import {observer} from "mobx-react";
import {dialogStore} from "../../../store/dialogStore";
import {DialogHeader} from "./DialogHeader";
import {DialogForm} from "./DialogForm";
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
`
const Header = styled.div`
    height: 102px;
    background: #1F232C;
	padding: 0 48px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Content = styled.div`
	padding: 26px 48px;
`

export const Dialog = observer(() => {
	return (
		<>
			{dialogStore.isOpen &&
                <Backdrop onClick={() => dialogStore.close()}>
                    <Container onClick={(event) => event.stopPropagation()}>
                        <DialogHeader />
                        <Content>
							{dialogStore.data?.form &&
								<DialogForm />
							}
							<DialogActions />
                        </Content>
                    </Container>
                </Backdrop>
			}
		</>
	)
})