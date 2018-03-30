'use strict';

import Store from './Store';
import Actions from '../dispatcher/Actions';
import actionTypes from '../dispatcher/actionTypes';

class MessageStore extends Store {
  constructor() {
    super();
    this._message = '';
  }
  onDispatch({type, data}) {
    switch (type) {
      case actionTypes.SEND:
        Actions.log(`MessageStore: action ${type}: "${data}" dispatched`);
        this._setMessage(data);
        break;
    }
  }
  getMessage() {
    return this._message;
  }
  _setMessage(data) {
    Actions.log('MessageStore: sending data to server...');
    this._sendToServer(data)
      .then(response => {
        Actions.log('MessageStore: got server response, updating data');
        this._message = data;
        Actions.log('MessageStore: change event emitted');
        this._emitChange();
      });
  }
  _sendToServer(data) {
    const DELAY = 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Actions.log(`Server: here is my response: "${data}"`);
        resolve(data);
      }, DELAY);
    });
  }
}

export default new MessageStore();
