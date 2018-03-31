'use strict';

import model from '../models/Log';

export default class LogView {
  constructor(selector) {
    this.element = document.querySelector('.log');
    model.onChange(this._onModelChange.bind(this));
  }
  _render() {
    const items = model.getAll();
    this.element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
  _onModelChange() {
    this._render();
  }
}
