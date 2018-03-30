'use strict';

import model from '../models/Log';

export default class LogView {
  constructor(selector) {
    this._element = document.querySelector('.log');
    model.onChange(this.onModelChange.bind(this));
  }
  render() {
    const items = model.getAll();
    this._element.innerHTML = '';
    this._element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
  onModelChange() {
    this.render();
  }
}
