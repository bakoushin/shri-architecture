'use strict';

import model from '../models/Message';
import controller from '../controllers/Message';
import log from '../controllers/Log';

export default class MessageView {
  constructor(selector) {
    this.element = document.querySelector('.view-stub');
    this.label = this.element.querySelector('.view-stub__label');
    this.input = this.element.querySelector('.view-stub__input');
    this.apply = this.element.querySelector('.view-stub__apply');
    this.apply.addEventListener('click', this.onApplyClick.bind(this));
    model.onChange(this.onModelChange.bind(this));
  }
  render() {
    const message = model.getMessage();
    this.label.textContent = `Сервер принял данные: ${message}`;
  }
  onApplyClick(e) {
    log.clear();
    log.addItem('MessageView: apply button was clicked, calling controller');
    controller.onApplyClick(this);
  }
  onModelChange() {
    log.addItem('MessageView: model was changed, rerendering');
    this.render();
  }
}
