import {makeAutoObservable} from "mobx";
import {ObjectStore} from "./objectStore";
import {IProjectAccess} from "../interfaces/entities/IProjectAccess";
import {
	ACCESSES_ENDPOINT,
	MEMBERS_ENDPOINT, OPERATIONS_ENDPOINT,
	PROJECT_ACCESSES_ENDPOINT,
	PROJECT_LINKS_ENDPOINT,
	PROJECT_MEMBERS_ENDPOINT, PROJECTS_ENDPOINT, TASKS_ENDPOINT
} from "../api/endoints";
import {IProjectLinks} from "../interfaces/entities/IProjectLinks";
import {TabStore} from "./tabStore";
import {createProjectTabs} from "../constants/projectTabs";
import {IProjectMember} from "../interfaces/entities/IProjectMember";
import {TaskStore} from "./taskStore";
import {IMember} from "../interfaces/entities/IMember";
import {IAccess} from "../interfaces/entities/IAccess";
import {IOperation} from "../interfaces/entities/IOperation";
import {IProject} from "../interfaces/entities/IProject";
import {ITask} from "../interfaces/entities/ITask";
import {OperationsStore} from "./operationsStore";
import {MemberStore} from "./memberStore";
import {LoginStore} from "./loginStore";
import {ProjectStore} from "./projectStore";
import {ProjectTaskStore} from "./projectTaskStore";
import {ProjectInfoDrawerStore} from "./projectInfoDrawerStore";
import {ProjectAccessStore} from "./projectAccessStore";
import {NotificationStore} from "./notificationStore";

export class AppStore {
	projectAccessObjectStore: ObjectStore<IProjectAccess>
	projectLinksObjectStore: ObjectStore<IProjectLinks>
	projectMemberObjectStore: ObjectStore<IProjectMember>
	memberObjectStore: ObjectStore<IMember>
	accessObjectStore: ObjectStore<IAccess>
	operationsObjectStore: ObjectStore<IOperation>
	projectObjectStore: ObjectStore<IProject>
	taskObjectStore: ObjectStore<ITask>

	memberStore: MemberStore
	taskStore: TaskStore
	operationsStore: OperationsStore
	loginStore: LoginStore
	projectStore: ProjectStore
	projectTaskStore: ProjectTaskStore
	projectAccessStore: ProjectAccessStore
	notificationStore: NotificationStore

	projectTabStore: TabStore

	projectInfoDrawerStore: ProjectInfoDrawerStore

	constructor() {
		this.projectAccessObjectStore = new ObjectStore<IProjectAccess>(PROJECT_ACCESSES_ENDPOINT, this)
		this.projectLinksObjectStore = new ObjectStore<IProjectLinks>(PROJECT_LINKS_ENDPOINT, this)
		this.projectMemberObjectStore = new ObjectStore<IProjectMember>(PROJECT_MEMBERS_ENDPOINT, this)
		this.memberObjectStore = new ObjectStore<IMember>(MEMBERS_ENDPOINT, this)
		this.accessObjectStore = new ObjectStore<IAccess>(ACCESSES_ENDPOINT, this)
		this.operationsObjectStore = new ObjectStore<IOperation>(OPERATIONS_ENDPOINT, this)
		this.projectObjectStore = new ObjectStore<IProject>(PROJECTS_ENDPOINT, this)
		this.taskObjectStore = new ObjectStore<ITask>(TASKS_ENDPOINT, this)

		this.taskStore = new TaskStore(this)
		this.operationsStore = new OperationsStore(this)
		this.memberStore = new MemberStore(this)
		this.loginStore = new LoginStore(this)
		this.projectStore = new ProjectStore(this)
		this.projectTaskStore = new ProjectTaskStore(this)
		this.projectAccessStore = new ProjectAccessStore(this)
		this.notificationStore = new NotificationStore(this)

		this.projectTabStore = new TabStore(createProjectTabs(this))

		this.projectInfoDrawerStore = new ProjectInfoDrawerStore(this)

		makeAutoObservable(this)
	}
}