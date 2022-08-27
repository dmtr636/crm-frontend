import {makeAutoObservable} from "mobx";
import {ObjectStore} from "./objectStore";
import {IProjectAccess} from "../interfaces/entities/IProjectAccess";
import {PROJECT_ACCESSES_ENDPOINT} from "../api/endoints";

export class AppStore {
	projectAccessObjectStore: ObjectStore<IProjectAccess>

	constructor() {
		this.projectAccessObjectStore = new ObjectStore<IProjectAccess>(PROJECT_ACCESSES_ENDPOINT)

		makeAutoObservable(this)
	}
}