import {makeAutoObservable} from "mobx";

export type BackdropType = "content" | "fullscreen"

class BackdropStore {
	isShowBackdrop = false
	backdropType: BackdropType = "content"

	setIsShowBackdrop(value: boolean, type?: BackdropType) {
		if (type) {
			this.backdropType = type
		}
		this.isShowBackdrop = value
	}

	setBackdropType(type: BackdropType) {
		this.backdropType = type
	}

	constructor() {
		makeAutoObservable(this)
	}
}

export const appStore = new BackdropStore()