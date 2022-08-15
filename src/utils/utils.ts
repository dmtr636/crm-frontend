import {SERVER_HOST} from "../constants/config";

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
	return `${SERVER_HOST}${path}`
}

export const dateTsToString = (ts: number) => {
	const date = new Date(ts * 1000)
	const options: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric"
	}
	return date.toLocaleDateString('ru-RU', options).toUpperCase().split(".")[0]
}