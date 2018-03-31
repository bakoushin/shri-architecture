'use strict';

import LogPresenter from '../presenters/Log';

export default class LogView {
  constructor() {
    this.presenter = new LogPresenter(this);
    this.element = document.querySelector('.log');
  }
  render({items}) {
    this.element.innerHTML = items
      .map(item => `<div>${item}</div>`)
      .join('\n');
  }
}
