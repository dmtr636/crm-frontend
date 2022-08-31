import {observer} from "mobx-react";
import styled from "styled-components";
import {useStore} from "../../../hooks/hooks";
import {ProjectInfoDrawerAccessLine} from "./ProjectInfoDrawerAccessLine";
import {ProjectInfoDrawerAccessColumn} from "./ProjectInfoDrawerAccessColumn";

const Container = styled.div`
    margin: 48px 0;
`
const Line = styled.div`
    width: 100%;
    height: 3px;
    background: #1F232C;
    margin: 48px 0;
	grid-column: span 3;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 26px;
`

export const ProjectInfoDrawerAccesses = observer(() => {
	const store = useStore()

	return (
		<Container>
			{store.projectAccessStore.accessesWith2Values?.map(access =>
				<ProjectInfoDrawerAccessLine access={access}/>
			)}
			{store.projectAccessStore.accessesWith2Values.length > 0
				&& store.projectAccessStore.accessesWith3Values.length > 0
				&& <Line/>
			}
			<Grid>
				{store.projectAccessStore.accessesWith3Values?.map((access, index) => {
					return (
						<>
							{index > 0 && index % 3 === 0 && <Line />}
							<ProjectInfoDrawerAccessColumn access={access}/>
						</>
					)
				})}
			</Grid>
		</Container>
	)
})