'use strict';

import Dispatcher from './Dispatcher';

export default class Store {
  constructor() {
    if (typeof this.onDispatch !== 'function') {
      throw new Error(
        `${this.constructor.name}: onDispatch method must be implemented`
      );
    }
    this.dispatchHandler = this.dispatchHandler.bind(this);
    Dispatcher.register(this.dispatchHandler);
    this._changeListeners = [];
    this.removeChangeListener = this.removeChangeListener.bind(this);
  }
  dispatchHandler(action) {
    this.onDispatch(action);
  }
  emitChange() {
    this._changeListeners.forEach(listener => listener());
  }
  addChangeListener(listener) {
    this._changeListeners.push(listener);
    return {
      remove() {
        this.removeChangeListener(listener);
      }
    };
  }
  removeChangeListener(listener) {
    this._changeListeners.splice(this._listeners.indexOf(listener), 1);
  }
}
