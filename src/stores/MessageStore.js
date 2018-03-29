"use strict";

import Store from "../flux/Store";
import actionTypes from "./actionTypes";

class MessageStore extends Store {
  constructor() {
    super();
    this._message = '';
  }
  onDispatch({ type, data }) {
    switch (type) {
      case actionTypes.SEND:
        this.sendToServer(data)
          .then(data => {
            this._message = data;
          });
        break;
    }
  }
  getMessage() {
    return this._message;
  }
  sendToServer(data) {
    const DELAY = 500;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data);
        resolve(data);
      }, DELAY);
    });
  }
}

export default new MessageStore();
