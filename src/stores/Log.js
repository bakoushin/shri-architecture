'use strict';

import Store from './Store';
import Dispatcher from '../dispatcher/Dispatcher';

class LogStore extends Store {
  constructor() {
    super();
    this._records = [];
    Dispatcher.register(this._onDispatch.bind(this));
  }
  getAll() {
    return this._records;
  }
  _onDispatch({type, data}) {
    switch (type) {
      case Dispatcher.actionTypes.LOG:
        this._append(data);
        break;
      case Dispatcher.actionTypes.CLEAR_LOG:
        this._clear();
        break;
    }
  }
  _append(data) {
    console.log(data);
    this._records.push(data);
    this._emitChange();
  }
  _clear() {
    console.clear();
    this._records = [];
    this._emitChange();
  }
}

export default new LogStore();
