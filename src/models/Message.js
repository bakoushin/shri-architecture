'use strict';

import Model from '../mvc/Model';
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
    this._message = data;
  }
  saveMessage(data) {
    log.addItem('MessageModel: got data to save, sending to server...');
    this.sendToServer(data)
      .then(response => {
        this.setMessage(response);
        log.addItem('MessageModel: server answer received, emitting change event');
        this.emitChange();
      });
  }
  sendToServer(data) {
    const DELAY = 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        log.addItem(`SERVER: here is my response: "${data}"`);
        resolve(data);
      }, DELAY);
    });
  }
}

export default new MessageModel();
