import {observer} from "mobx-react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {projectObjectStore} from "../../store/objectStore";
import {dateTsToString} from "../../utils/utils";
import {ProjectHeaderAction} from "./ProjectHeaderAction";
import {useMemo} from "react";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    column-gap: 26px;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-right: auto;
`
const Name = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0.03em;
    color: #1F232C;
`
const Date = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: 0.03em;
    color: #1F232C;
`

export const ProjectHeader = observer(() => {
	const params = useParams()
	const id = Number(params.id)
	const project = projectObjectStore.findById(id)
	const store = useStore()

	const requestFields = useMemo(() => {
		if (project) {
			return {"project_id": project?.id}
		}
	}, [project])

	return (
		<Container>
			{project &&
                <>
                    <Column>
                        <Name>{project.name}</Name>
                        <Date>{dateTsToString(project.deadline, "number")}</Date>
                    </Column>

					{store.projectTabStore.tab.actions?.map(action =>
						<ProjectHeaderAction
							action={action}
							object={project}
							objectId={project.id}
							requestFields={requestFields}
							key={action.buttonText}
						/>
					)}
                </>
			}
		</Container>
	)
})