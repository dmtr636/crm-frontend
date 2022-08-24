import {SERVER_HOST} from "../constants/config";
import {IDialogData} from "../interfaces/IDialogData";

export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/
		);
};

export const preloadImages = (images: string[]) => {
	images.forEach((src) => {
		const img = new Image();
		img.src = src;
	});
}

export const url = (path: string) => {
	return `${SERVER_HOST}/${path}`
}

export const dateTsToString = (ts: number, format?: "number" | "text") => {
	const date = new Date(ts * 1000)
	const options: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric"
	}

	switch (format) {
		case "number":
			return date.toLocaleDateString()
		case "text":
		default:
			return date.toLocaleDateString('ru-RU', options).toUpperCase().split(".")[0]
	}
}

export const dateToTs = (date: Date) => {
	return Math.floor(date.getTime() / 1000)
}

export const createFieldsFromDialogData = (data: IDialogData) => {
	let fields: { [key: string]: string | number } = {}
	data.form?.fields.forEach(field => {
		switch (field.type) {
			case "date":
				fields[field.name] = Number(field.value ?? "")
				break
			case "text":
				fields[field.name] = field.value ?? ""
				break
			case "number":
				fields[field.name] = Number(field.value ?? "")
				break
			default:
				fields[field.name] = field.value ?? ""
		}
	})
	return fields
}