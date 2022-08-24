import {observer} from "mobx-react";
import styled from "styled-components";
import {operationsObjectStore} from "../../store/objectStore";
import {StudioOperationsListItem} from "./StudioOperationsListItem";
import {operationsStore} from "../../store/operationsStore";
import {StudioMoneyTab} from "./StudioMoneyTab";
import {useEffect, useState} from "react";

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
	const operations = operationsObjectStore.objects
	const [activeTabIndex, setActiveTabIndex] = useState(0)

	const tabs = [
		{
			name: "Деньги студии",
			value: operationsStore.totalAmount,
		},
		{
			name: "Прибыль",
			value: operationsStore.incomeAmount,
		},
		{
			name: "Расход",
			value: operationsStore.expenseAmount,
		}
	]

	const getOperations = () => {
		switch (activeTabIndex) {
			case 0: return operationsStore.allOperations
			case 1: return operationsStore.incomeOperations
			case 2: return operationsStore.expenseOperations
		}
	}

	useEffect(() => {
		operationsStore.operations = operations
	}, [operations])

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