import {observable, computed, action, makeAutoObservable} from 'mobx';

export interface Hide {
    hidden: boolean;
}

export class UserStore implements Hide {
    constructor() {
      makeAutoObservable(this)
    }

    hidden = true;
}

let userStore : UserStore;
export function getUserstore() {
  if (!userStore)
    userStore = new UserStore();
  return userStore;
};