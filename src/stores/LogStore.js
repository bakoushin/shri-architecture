"use strict";

import Store from "../flux/Store";
import actionTypes from "./actionTypes";

class LogStore extends Store {
  constructor() {
    super();
    this._logItems = [];
  }
  onDispatch({ type, data }) {
    switch (type) {
      case actionTypes.LOG:
        this._logItems.push(data);
        break;
    }
  }
  getAll() {
    return this._logItems;
  }
}

export default new LogStore();
