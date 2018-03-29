'use strict';

import Store from "../flux/Store";
import Actions from "../actions/Actions";
import actionTypes from "../actions/actionTypes";

class MessageStore extends Store {
  constructor() {
    super();
    this._message = '';
  }
  onDispatch({ type, data }) {
    switch (type) {
      case actionTypes.SEND:
        Actions.log(`MessageStore: action ${type}: "${data}" dispatched`);
        Actions.log(`MessageStore: sending data to server...`);
        this.sendToServer(data)
          .then(data => {
            Actions.log(`MessageStore: got server response, updating data`);
            this.setMessage(data);
            Actions.log(`MessageStore: change event emitted`);
            this.emitChange();
          });
        break;
    }
  }
  getMessage() {
    return this._message;
  }
  setMessage(data) {
    this._message = data;
  }
  sendToServer(data) {
    const DELAY = 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Actions.log(`SERVER: here is my response: "${data}"`);
        resolve(data);
      }, DELAY);
    });
  }
}

export default new MessageStore();
