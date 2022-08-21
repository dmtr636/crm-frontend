import {ITabOption} from "../interfaces/ITabOption";
import {StudioMoney} from "../components/studio/StudioMoney";
import {StudioAccess} from "../components/studio/StudioAccess";
import {StudioCommand} from "../components/studio/StudioCommand";

export const studioTabs: ITabOption[] = [
	{
		id: "money",
		value: "Деньги",
		component: <StudioMoney />,
		actionButtonText: "Добавить операцию"
	},
	{
		id: "access",
		value: "Доступы",
		component: <StudioAccess />,
		actionButtonText: "Добавить доступ"
	},
	{
		id: "command",
		value: "Команда",
		component: <StudioCommand />,
		actionButtonText: "Добавить участника"
	}
]