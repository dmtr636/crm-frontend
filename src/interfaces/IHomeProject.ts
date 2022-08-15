import {ITask} from "./ITask";

export interface IHomeProject {
	project_id: number,
	project_name: string,
	type: "my_project" | "quest" | "archive",
	date_ts: number,
	tasks_filter: "all" | "completed",
	tasks: ITask[]
}