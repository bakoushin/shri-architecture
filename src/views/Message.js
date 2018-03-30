'use strict';

import Actions from '../dispatcher/Actions';
import MessageStore from '../stores/Message';

export default class MainView {
  constructor() {
    this._element = document.querySelector('.view-stub');
    this._label = this._element.querySelector('.view-stub__label');
    this._input = this._element.querySelector('.view-stub__input');
    this._apply = this._element.querySelector('.view-stub__apply');
    this._apply.addEventListener('click', this._onApplyClick.bind(this));
    MessageStore.onChange(this._onMessageStoreChange.bind(this));
  }
  _onApplyClick(e) {
    Actions.clearLog();
    Actions.log('MainView: action sent to Dispatcher');
    Actions.send(this._input.value);
  }
  _onMessageStoreChange() {
    Actions.log('MainView: MessageStore was changed, rerendering');
    this._render();
  }
  _render() {
    const message = MessageStore.getMessage();
    this._label.textContent = `Сервер принял данные: ${message}`;
  }
}
