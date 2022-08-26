export interface IProject {
	id: number,
	name: string,
	deadline: number,
	category: "in_work" | "on_support" | "archive"
}