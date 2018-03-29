'use strict';

class Dispatcher {
  constructor() {
      this._listeners = [];
      this.unregister = this.unregister.bind(this);
  }
  register(listener) {
      this._listeners.push(listener);
      return {
          unregister() {
              this.unregister(listener);
          }
      }
  }
  unregister(listener) {
      this._listeners.splice(this._listeners.indexOf(listener), 1);
  }
  dispatch(action) {
      this._listeners.forEach(listener => listener(action));
  }
}

export default new Dispatcher();