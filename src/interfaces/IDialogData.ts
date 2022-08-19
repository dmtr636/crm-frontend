interface IDialogTitle {
	add?: string,
	edit?: string,
	confirm?: string,
	successAdd?: string,
	successDelete?: string
}

export interface IDialogField {
	label: string,
	name: string,
	columns?: number,
	value?: string,
	validated?: boolean
}

export interface IDialogText {
	successAdd?: string,
	successAddObjectFieldName?: string
}

export interface IDialogAction {
	type: "save" | "add" | "delete" | "ok" | "cancel",
	label: string,
	onClick: (data: IDialogData) => void
}

export interface IDialogData {
	title?: IDialogTitle,
	text?: IDialogText,
	form?: {
		columns: number,
		fields: IDialogField[]
	},
	actions?: IDialogAction[]
}