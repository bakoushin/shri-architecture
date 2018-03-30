'use strict';

export default class LogView {
  constructor(controller) {
    this.controller = controller;
    this._element = document.querySelector('.log');
  }
  render({items}) {
    this._element.innerHTML = '';
    this._element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
}
