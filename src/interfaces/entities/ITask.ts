export type TaskCategory = "design" | "development" | "marketing" | "ceo"

export interface ITask {
	id: number,
	text: string,
	completed: boolean,
	category: TaskCategory,
	executor_id: number,
	project_id: number,
	type: "task" | "quest"
}