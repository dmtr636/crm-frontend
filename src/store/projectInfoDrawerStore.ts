import {AppStore} from "./AppStore";
import {IProject} from "../interfaces/entities/IProject";
import {makeAutoObservable} from "mobx";

export class ProjectInfoDrawerStore {
	appStore: AppStore
	isShowDrawer = false
	project?: IProject

	constructor(store: AppStore) {
		this.appStore = store

		makeAutoObservable(this)
	}

	open(project: IProject) {
		this.project = project
		this.isShowDrawer = true
	}

	close() {
		this.isShowDrawer = false
	}
}