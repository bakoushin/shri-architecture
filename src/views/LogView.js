'use strict';

import LogStore from '../stores/LogStore';

export default class LogView {
  constructor(selector) {
    this._element = document.querySelector(selector);
    LogStore.addChangeListener(this.onLogStoreChange.bind(this));
  }
  render() {
    const items = LogStore.getAll();
    this._element.innerHTML = '';
    this._element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
  onLogStoreChange() {
    this.render();
  }
}
