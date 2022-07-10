import {makeAutoObservable} from "mobx";
import {validateEmail} from "../utils/utils";
import axios from "axios";
import {LOGIN_ENDPOINT} from "../api/endoints";
import UserStore from "./userStore";

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

  async login() {
    const res = await axios.post(LOGIN_ENDPOINT, {
      email: this.email,
      password: this.password
    })
    let data = res.data
    if (!data.error) {
      UserStore.user = data
      return true
    } else {
      return false
    }
  }

  get formValidated() {
    return !!(this.password.length > 0 && validateEmail(this.email));
  }
}

export default new LoginStore()