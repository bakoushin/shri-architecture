'use strict';

import Model from '../mvc/Model';

class LogModel extends Model {
  constructor() {
    super();
    this._logItems = [];
  }
  getAll() {
    return this._logItems;
  }
  addItem(data) {
    console.log(data);
    this._logItems.push(data);
    this.emitChange();
  }
  clear() {
    console.clear();
    this._logItems = [];
    this.emitChange();
  }
}

export default new LogModel();
