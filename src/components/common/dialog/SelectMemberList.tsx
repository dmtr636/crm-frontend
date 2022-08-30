import {observer} from "mobx-react";
import {IDialogField} from "../../../interfaces/IDialogData";
import {dialogStore} from "../../../store/dialogStore";
import {SelectMemberListItem} from "./SelectMemberListItem";
import styled from "styled-components";
import {IProjectMember} from "../../../interfaces/entities/IProjectMember";
import {IMember} from "../../../interfaces/entities/IMember";
import {useMemo} from "react";
import {useStore} from "../../../hooks/hooks";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 26px;
`

export const SelectMemberList = observer((props: { field: IDialogField }) => {
	const {field} = props
	const store = useStore()
	const existedMembers = dialogStore.store?.objects as IProjectMember[]

	const existedMembersIds = useMemo(() =>
		existedMembers.map(member => member.member_id),
	[existedMembers]
	)

	const members = useMemo(() =>
		store.memberStore.members?.filter(member => !existedMembersIds.includes(member.id)),
	[existedMembersIds]
	)

	const handleSelect = (member: IMember) => {
		field.value = member.id.toString()
	}

	return (
		<Container>
			{members?.map(member =>
				<SelectMemberListItem
					member={member}
					selected={field.value === member.id.toString()}
					onSelect={() => handleSelect(member)}
				/>
			)}
		</Container>
	)
})