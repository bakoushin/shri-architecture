'use strict';

import Store from './Store';
import actionTypes from '../dispatcher/actionTypes';

class LogStore extends Store {
  constructor() {
    super();
    this._records = [];
  }
  onDispatch({type, data}) {
    switch (type) {
      case actionTypes.LOG:
        this._append(data);
        this._emitChange();
        break;
      case actionTypes.CLEAR_LOG:
        this._clear();
        this._emitChange();
        break;
    }
  }
  getAll() {
    return this._records;
  }
  _append(data) {
    console.log(data);
    this._records.push(data);
  }
  _clear() {
    console.clear();
    this._records = [];
  }
}

export default new LogStore();
