import Store from './Store';
import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../dispatcher/Actions';

class MessageStore extends Store {
  constructor() {
    super();
    this._message = '';
    Dispatcher.register(this._onDispatch.bind(this));
  }
  getMessage() {
    return this._message;
  }
  _onDispatch({type, data}) {
    switch (type) {
      case Dispatcher.actionTypes.SEND:
        Actions.log(`MessageStore: action ${type} "${data}" dispatched`);
        this._setMessage(data);
        break;
    }
  }
  _setMessage(data) {
    Actions.log('MessageStore: sending message to server...');
    this._sendToServer(data)
      .then(response => {
        Actions.log('MessageStore: got server response, change event emitted');
        this._message = data;
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
