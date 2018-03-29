'use strict';

export default class View {
  constructor(selector) {
    if (typeof this.render !== 'function') {
      throw new Error(`${this.constructor.name} must implement "render" method`);
    }
    this._element = document.querySelector(selector);
  }
}
