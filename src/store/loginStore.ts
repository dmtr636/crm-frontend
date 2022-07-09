import {makeAutoObservable} from "mobx";

class LoginStore {
  formValidated = false
  email = ""
  password = ""

  constructor() {
    makeAutoObservable(this)
  }


}