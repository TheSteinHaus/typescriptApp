import {observable, computed, action, makeAutoObservable} from 'mobx';

export interface Hide {
    hidden: boolean;
}

export class UserStore implements Hide {
    constructor() {
      makeAutoObservable(this)
    }

    hidden = true;

    changeHidden() {
      return !this.hidden;
    }

}

let userStore : UserStore;
export function getUserstore() {
  if (!userStore)
    userStore = new UserStore();
  return userStore;
};