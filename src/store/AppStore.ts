import {makeAutoObservable} from "mobx";
import {ObjectStore} from "./objectStore";
import {IProjectAccess} from "../interfaces/entities/IProjectAccess";
import {PROJECT_ACCESSES_ENDPOINT, PROJECT_LINKS_ENDPOINT} from "../api/endoints";
import {IProjectLinks} from "../interfaces/entities/IProjectLinks";
import {TabStore} from "./tabStore";
import {createProjectTabs} from "../constants/projectTabs";

export class AppStore {
	projectAccessObjectStore: ObjectStore<IProjectAccess>
	projectLinksObjectStore: ObjectStore<IProjectLinks>

	projectTabStore: TabStore

	constructor() {
		this.projectAccessObjectStore = new ObjectStore<IProjectAccess>(PROJECT_ACCESSES_ENDPOINT)
		this.projectLinksObjectStore = new ObjectStore<IProjectLinks>(PROJECT_LINKS_ENDPOINT)

		this.projectTabStore = new TabStore(createProjectTabs(this))

		makeAutoObservable(this)
	}
}