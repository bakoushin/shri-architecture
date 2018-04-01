'use strict';

export default class Store {
  constructor() {
    this._changeListeners = [];
    this.unregister = this.unregister.bind(this);
  }
  onChange(listener) {
    this._changeListeners.push(listener);
    return {
      unregister() {
        this.unregister(listener);
      }
    };
  }
  unregister(listener) {
    this._changeListeners.splice(this._listeners.indexOf(listener), 1);
  }
  _emitChange() {
    this._changeListeners.forEach(listener => listener());
  }
}