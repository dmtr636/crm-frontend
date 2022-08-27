import {makeAutoObservable} from "mobx";
import {IOperation} from "../interfaces/entities/IOperation";
import {operationsObjectStore} from "./objectStore";

class OperationsStore {
	constructor() {
		makeAutoObservable(this)
	}

	get operations() {
		return operationsObjectStore.objects
	}

	get allOperations() {
		return this.operations
	}

	get incomeOperations() {
		return this.operations?.filter(operation => operation.type === "income")
	}

	get expenseOperations() {
		console.log("123123")
		return this.operations?.filter(operation => operation.type === "expense")
	}

	get totalAmount() {
		return this.operations?.reduce((previousValue, currentValue) =>
				previousValue + currentValue.amount * (currentValue.type === "income" ? 1 : -1),
			0
		)
	}

	get incomeAmount() {
		return this.operations?.reduce((previousValue, currentValue) =>
				previousValue + currentValue.amount * (currentValue.type === "income" ? 1 : 0),
			0
		)
	}

	get expenseAmount() {
		return this.operations?.reduce((previousValue, currentValue) =>
				previousValue + currentValue.amount * (currentValue.type === "income" ? 0 : 1),
			0
		)
	}
}

export const operationsStore = new OperationsStore()