'use strict';

import LogStore from '../stores/Log';

export default class LogView {
  constructor() {
    this._element = document.querySelector('.log');
    LogStore.onChange(this._onLogStoreChange.bind(this));
  }
  _render() {
    const items = LogStore.getAll();
    this._element.innerHTML = '';
    this._element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
  _onLogStoreChange() {
    this._render();
  }
}
