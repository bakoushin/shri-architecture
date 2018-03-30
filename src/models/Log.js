'use strict';

import Model from './Model';

class LogModel extends Model {
  constructor() {
    super();
    this._records = [];
  }
  getAll() {
    return this._records;
  }
  append(data) {
    console.log(data);
    this._records.push(data);
    this._emitChange();
  }
  clear() {
    console.clear();
    this._records = [];
    this._emitChange();
  }
}

export default new LogModel();
