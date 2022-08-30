import {observer} from "mobx-react";
import styled from "styled-components";
import {StudioOperationsListItem} from "./StudioOperationsListItem";
import {StudioMoneyTab} from "./StudioMoneyTab";
import {useState} from "react";
import {useStore} from "../../hooks/hooks";

const Container = styled.div`
	margin-top: 48px;
`
const Tabs = styled.div`
	display: flex;
	column-gap: 26px;
`
const Operations = styled.div`
	margin-top: 48px;
`

export const StudioMoney = observer(() => {
	const store = useStore()
	const [activeTabIndex, setActiveTabIndex] = useState(0)

	const tabs = [
		{
			name: "Деньги студии",
			value: store.operationsStore.totalAmount,
		},
		{
			name: "Прибыль",
			value: store.operationsStore.incomeAmount,
		},
		{
			name: "Расход",
			value: store.operationsStore.expenseAmount,
		}
	]

	const getOperations = () => {
		switch (activeTabIndex) {
			case 0: return store.operationsStore.allOperations
			case 1: return store.operationsStore.incomeOperations
			case 2: return store.operationsStore.expenseOperations
		}
	}

	return (
		<Container>
			<Tabs>
				{tabs.map((tab, index) =>
					<StudioMoneyTab
						tab={tab}
					 	onClick={() => setActiveTabIndex(index)}
						active={activeTabIndex === index}
					/>
				)}
			</Tabs>
			<Operations>
				{getOperations()?.map(operation =>
					<StudioOperationsListItem operation={operation} />
				)}
			</Operations>
		</Container>
	)
})