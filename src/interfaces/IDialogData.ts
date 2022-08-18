interface IDialogTitle {
	add: string,
	edit?: string,
	confirm?: string,
	success?: string
}

export interface IDialogField {
	label: string,
	name: string,
	columns?: number,
	value?: string,
	validated?: boolean
}

export interface IDialogAction {
	type: "save" | "add" | "delete" | "ok" | "cancel",
	label: string,
	onClick: (data: IDialogData) => void
}

export interface IDialogData {
	title: IDialogTitle,
	form?: {
		columns: number,
		fields: IDialogField[]
	},
	actions?: IDialogAction[]
}