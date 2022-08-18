import {ITabOption} from "../interfaces/ITabOption";
import {makeAutoObservable} from "mobx";
import {studioTabs} from "../constants/studioTabs";
import {homeTabs} from "../constants/homeTabs";

export class TabStore {
	options: ITabOption[]
	option: ITabOption

	constructor(options: ITabOption[]) {
		this.options = options
		this.option = options[0]
		makeAutoObservable(this)
	}

	setOption(option: ITabOption) {
		this.option = option
	}
}

export const studioTabStore = new TabStore(studioTabs)
export const homeTabStore = new TabStore(homeTabs)