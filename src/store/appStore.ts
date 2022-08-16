import {makeAutoObservable} from "mobx";

export type BackdropType = "content" | "fullscreen"

class AppStore {
	isShowBackdrop = false
	backdropType: BackdropType = "content"

	setIsShowBackdrop(value: boolean) {
		this.isShowBackdrop = value
	}

	setBackdropType(type: BackdropType) {
		this.backdropType = type
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const appStore = new AppStore()