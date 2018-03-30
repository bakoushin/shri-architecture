'use strict';

import LogController from '../controllers/Log';

export default class MessageView {
  constructor(controller) {
    this.controller = controller;
    this.element = document.querySelector('.view-stub');
    this.label = this.element.querySelector('.view-stub__label');
    this.input = this.element.querySelector('.view-stub__input');
    this.apply = this.element.querySelector('.view-stub__apply');
    this.apply.addEventListener('click', this.onApplyClick.bind(this));
  }
  render({message}) {
    this.label.textContent = `Сервер принял данные: ${message}`;
  }
  onApplyClick(e) {
    const log = new LogController();
    log.clear();
    log.addItem('MessageView: apply button was clicked, calling controller');
    this.controller.onApplyClick(this);
  }
}
