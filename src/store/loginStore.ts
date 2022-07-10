import {makeAutoObservable} from "mobx";
import {validateEmail} from "../utils/utils";

class LoginStore {
  email = ""
  password = ""

  constructor() {
    makeAutoObservable(this)
  }

  setEmail(email: string) {
    this.email = email
  }
  setPassword(password: string) {
    this.password = password
  }

  get formValidated() {
    return !!(this.password.length > 0 && validateEmail(this.email));
  }
}

export default new LoginStore()