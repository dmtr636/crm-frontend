import {makeAutoObservable} from "mobx";
import {ObjectStore} from "./objectStore";
import {IProjectAccess} from "../interfaces/entities/IProjectAccess";
import {PROJECT_ACCESSES_ENDPOINT, PROJECT_LINKS_ENDPOINT, PROJECT_MEMBERS_ENDPOINT} from "../api/endoints";
import {IProjectLinks} from "../interfaces/entities/IProjectLinks";
import {TabStore} from "./tabStore";
import {createProjectTabs} from "../constants/projectTabs";
import {IProjectMember} from "../interfaces/entities/IProjectMember";

export class AppStore {
	projectAccessObjectStore: ObjectStore<IProjectAccess>
	projectLinksObjectStore: ObjectStore<IProjectLinks>
	projectMemberObjectStore: ObjectStore<IProjectMember>

	projectTabStore: TabStore

	constructor() {
		this.projectAccessObjectStore = new ObjectStore<IProjectAccess>(PROJECT_ACCESSES_ENDPOINT)
		this.projectLinksObjectStore = new ObjectStore<IProjectLinks>(PROJECT_LINKS_ENDPOINT)
		this.projectMemberObjectStore = new ObjectStore<IProjectMember>(PROJECT_MEMBERS_ENDPOINT)

		this.projectTabStore = new TabStore(createProjectTabs(this))

		makeAutoObservable(this)
	}
}