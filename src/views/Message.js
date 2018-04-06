'use strict';

import MessagePresenter from '../presenters/Message';

export default class MessageView {
  constructor() {
    this.presenter = new MessagePresenter(this);
    this.element = document.querySelector('.view-stub');
    this.label = this.element.querySelector('.view-stub__label');
    this.input = this.element.querySelector('.view-stub__input');
    this.apply = this.element.querySelector('.view-stub__apply');
    this.apply.addEventListener('click', this.onApplyClick.bind(this));
  }
  render({message}) {
    this.label.textContent = `Сервер принял данные: ${message}`;
    this.presenter.log('MessageView: happily rerendered');
  }
  onApplyClick(e) {
    this.presenter.clearLog();
    this.presenter.log('MessageView: apply button was clicked, calling presenter');
    this.presenter.onApplyClick();
  }
}
