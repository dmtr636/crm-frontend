import {ITab} from "../interfaces/ITab";
import {makeAutoObservable, runInAction} from "mobx";
import {studioTabs} from "../constants/studioTabs";
import {homeTabs} from "../constants/homeTabs";
import {projectListTabs} from "../constants/projectListTabs";
import {projectTabs} from "../constants/projectTabs";
import {projectTasksTabs} from "../constants/projectTasksTabs";

export class TabStore {
	tabs: ITab[]
	tab: ITab

	constructor(tabs: ITab[]) {
		this.tabs = tabs
		this.tab = tabs[0]
		makeAutoObservable(this)
	}

	setTab(tab: ITab) {
		this.tab = tab
	}

	setTabsValue(createValue: (category: string) => string) {
		this.tabs.forEach(tab => tab.value = createValue(tab.id))
	}
}

export const studioTabStore = new TabStore(studioTabs)
export const homeTabStore = new TabStore(homeTabs)
export const projectListTabStore = new TabStore(projectListTabs)
export const projectTabStore = new TabStore(projectTabs)
export const projectTasksTabStore = new TabStore(projectTasksTabs)