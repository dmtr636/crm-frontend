import {observer} from "mobx-react";
import styled from "styled-components";
import {useStore} from "../../../hooks/hooks";
import avatarPlaceholder from "assets/dialog/avatarPlaceholder.svg"
import {url} from "../../../utils/utils";
import { Button } from "../button/Button";
import React, {useRef, useState} from "react";
import axios from "axios";
import {UPLOAD_AVATAR_ENDPOINT} from "../../../api/endoints";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Avatar = styled.img`
	width: 200px;
	height: 200px;
	margin-top: 24px;
	margin-bottom: 50px;
	border-radius: 50%;
	object-fit: cover;
`
const FileInput = styled.input`
	display: none;
`
const Text = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: rgba(31, 35, 44, 0.7);
	margin-top: 26px;
`

type State = "ready" | "uploading" | "uploaded"

export const UploadPhotoDialog = observer(() => {
	const store = useStore()
	const avatar = store.memberStore.member?.avatar
	const ref = useRef(null)
	const [state, setState] = useState<State>("ready")

	const handleClick = () => {
		(ref.current as any).click()
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files
		if (files?.item(0)) {
			uploadFile(files.item(0)!)
			setState("uploading")
		}
	}

	const uploadFile = (file: File) => {
		const formData = new FormData();
		formData.append("image", file);
		formData.append("member_id", store.memberStore.member?.id.toString()!)
		axios.post(UPLOAD_AVATAR_ENDPOINT, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
			store.memberStore.member = res.data.result
			setState("uploaded")
		})
	}

	const getButtonText = () => {
		switch (state) {
			case "ready": return "Выбрать файл"
			case "uploading": return "Гружу.."
			case "uploaded": return "Загружено"
		}
	}

	return (
		<Container>
			<Avatar src={avatar ? url(avatar) : avatarPlaceholder} />
			<label>
				<FileInput onChange={handleChange} type={"file"} ref={ref}/>
				<Button
					onClick={handleClick}
					disabled={state !== "ready"}
				>
					{getButtonText()}
				</Button>
			</label>
			<Text>
				JPEG, PNG, не более 1 мб
			</Text>
		</Container>
	)
})