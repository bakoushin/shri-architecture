'use strict';

import Actions from '../actions/Actions';
import MessageStore from '../stores/MessageStore';

export default class MainView {
  constructor() {
    this._element = document.querySelector('.view-stub');
    this._label = this._element.querySelector('.view-stub__label');
    this._input = this._element.querySelector('.view-stub__input');
    this._apply = this._element.querySelector('.view-stub__apply');
    this._apply.addEventListener('click', this.onApplyClick.bind(this));
    MessageStore.addChangeListener(this.onMessageStoreChange.bind(this));
  }
  render() {
    const message = MessageStore.getMessage();
    this._label.textContent = `Сервер принял данные: ${message}`;
  }
  onApplyClick(e) {
    Actions.clearLog();
    Actions.log('MainView: action sent to Dispatcher');
    Actions.send(this._input.value);
  }
  onMessageStoreChange() {
    Actions.log('MainView: MessageStore was changed, rerendering');
    this.render();
  }
}
