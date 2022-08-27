export type ITaskCategory = "design" | "development" | "marketing" | "ceo"

export interface ITask {
	id: number,
	text: string,
	completed: boolean,
	category: ITaskCategory,
	executor_id: number,
	project_id: number,
	type: "task" | "quest"
}