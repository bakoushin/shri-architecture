'use strict';

import Store from "../flux/Store";
import actionTypes from "../actions/actionTypes";

class LogStore extends Store {
  constructor() {
    super();
    this._logItems = [];
  }
  onDispatch({ type, data }) {
    switch (type) {
      case actionTypes.LOG:
        this.addItem(data);
        this.emitChange();
        break;
      case actionTypes.CLEAR_LOG:
        this.clear();
        this.emitChange();
        break;
    }
  }
  getAll() {
    return this._logItems;
  }
  addItem(data) {
    console.log(data);
    this._logItems.push(data);
  }
  clear() {
    console.clear();
    this._logItems = [];
  }
}

export default new LogStore();
