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
	value?: string
}

export interface IDialogData {
	title: IDialogTitle,
	form?: {
		columns: number,
		fields: IDialogField[]
	}
}