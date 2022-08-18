import {ITabOption} from "../interfaces/ITabOption";
import {StudioMoney} from "../components/common/studio/StudioMoney";
import {StudioAccess} from "../components/common/studio/StudioAccess";
import {StudioCommand} from "../components/common/studio/StudioCommand";

export const studioTabs: ITabOption[] = [
	{
		id: "money",
		value: "Деньги",
		component: <StudioMoney />
	},
	{
		id: "access",
		value: "Доступы",
		component: <StudioAccess />
	},
	{
		id: "command",
		value: "Команда",
		component: <StudioCommand />
	}
]