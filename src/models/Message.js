'use strict';

import Model from './Model';
import log from './Log';

class MessageModel extends Model {
  constructor() {
    super();
    this._message = '';
  }
  getMessage() {
    return this._message;
  }
  setMessage(data) {
    log.append('MessageModel: got a message, sending it to server...');
    this._sendToServer(data)
      .then(response => {
        this._message = response;
        log.append('MessageModel: server answer received, emitting change event');
        this._emitChange();
      });
  }
  _sendToServer(data) {
    const DELAY = 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log.append(`Server: here is my response: "${data}"`);
        resolve(data);
      }, DELAY);
    });
  }
}

export default new MessageModel();
