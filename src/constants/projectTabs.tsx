import {ITab} from "../interfaces/ITab";
import {dialogStore, DialogType} from "../store/dialogStore";
import {ProjectTasks} from "../components/project/ProjectTasks";
import {ProjectAccess} from "../components/project/ProjectAccess";
import {createProjectAccessDialogData} from "./dialog/projectAccessDialog";
import {createProjectLinksDialogData} from "./dialog/projectLinksDialogData";
import {AppStore} from "../store/AppStore";
import {ProjectLinks} from "../components/project/ProjectLinks";
import {createProjectMemberDialog} from "./dialog/projectMemberDialog";
import {ProjectMembersList} from "../components/project/ProjectMembersList";
import {createEditProjectDialog} from "./dialog/editProjectDialog";
import {createProjectTaskDialogData} from "./dialog/projectTaskDialogData";
import {createProjectQuestDialogData} from "./dialog/projectQuestDialogData";

export const createProjectTabs = (store: AppStore): ITab[] => {
	return [
		{
			id: "tasks",
			value: "Задачи",
			actions: [
				{
					buttonText: "Редактировать проект",
					onClick: params => dialogStore.open(
						DialogType.edit,
						createEditProjectDialog(store),
						params.object,
						params.objectId
					)
				},
				{
					buttonText: "Добавить задачу",
					onClick: params => dialogStore.openV2({
						type: DialogType.add,
						data: createProjectTaskDialogData(store),
						requestFields: {
							type: "task",
							...params.requestFields
						}
					})
				},
				{
					buttonText: "Добавить квест",
					onClick: params => dialogStore.openV2({
						type: DialogType.add,
						data: createProjectQuestDialogData(store),
						requestFields: {
							type: "quest",
							...params.requestFields
						}
					})
				}
			],
			component: <ProjectTasks/>
		},
		{
			id: "accesses",
			value: "Доступы",
			actions: [
				{
					buttonText: "Редактировать проект",
					onClick: params => dialogStore.open(
						DialogType.edit,
						createEditProjectDialog(store),
						params.object,
						params.objectId
					)
				},
				{
					buttonText: "Добавить доступ",
					onClick: params => dialogStore.openV2({
						type: DialogType.add,
						data: createProjectAccessDialogData(params.store!),
						requestFields: params.requestFields
					})
				},
			],
			component: <ProjectAccess/>
		},
		{
			id: "links",
			value: "Ссылки",
			actions: [
				{
					buttonText: "Редактировать проект",
					onClick: params => dialogStore.open(
						DialogType.edit,
						createEditProjectDialog(store),
						params.object,
						params.objectId
					)
				},
				{
					buttonText: "Редактировать ссылки",
					onClick: params => {
						dialogStore.openV2({
							type: DialogType.edit,
							object: store.projectLinksObjectStore.objects?.at(0) ?? {},
							objectId: store.projectLinksObjectStore.objects?.at(0)?.id ?? 0,
							data: createProjectLinksDialogData(params.store!),
							requestFields: params.requestFields
						})
					}
				}
			],
			component: <ProjectLinks/>
		},
		{
			id: "team",
			value: "Команда",
			actions: [
				{
					buttonText: "Редактировать проект",
					onClick: params => dialogStore.open(
						DialogType.edit,
						createEditProjectDialog(store),
						params.object,
						params.objectId
					)
				},
				{
					buttonText: "Добавить в команду",
					onClick: params => dialogStore.openV2({
						type: DialogType.add,
						data: createProjectMemberDialog(params.store!),
						requestFields: params.requestFields
					})
				},
			],
			component: <ProjectMembersList />
		}
	]
}