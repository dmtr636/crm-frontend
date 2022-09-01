import {ITaskGroupProject} from "./ITaskGroupProject";

export interface ITaskGroup {
	deadline: number,
	projects: ITaskGroupProject[]
}