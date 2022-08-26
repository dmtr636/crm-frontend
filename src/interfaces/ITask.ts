export type ITaskCategory = "design" | "development" | "marketing" | "ceo"

export interface ITask {
	id: number,
	text: string,
	completed: boolean,
	category: ITaskCategory,
	executorId: number,
	projectId: number
}