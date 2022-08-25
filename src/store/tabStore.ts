import {ITabOption} from "../interfaces/ITabOption";
import {makeAutoObservable} from "mobx";
import {studioTabs} from "../constants/studioTabs";
import {homeTabs} from "../constants/homeTabs";
import {projectListTabs} from "../constants/projectListTabs";
import {projectTabs} from "../constants/projectTabs";

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
export const projectListTabStore = new TabStore(projectListTabs)
export const projectTabStore = new TabStore(projectTabs)