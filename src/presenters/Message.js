'use strict';

import model from '../models/Message';
import log from '../models/Log';

export default class MessagePresenter {
  constructor(view) {
    this._view = view;
    model.onChange(this._onModelChange.bind(this));
  }
  onApplyClick(view) {
    log.append('MessagePresenter: ok, saving the message in a model');
    model.setMessage(this._view.input.value);
  }
  log(data) {
    log.append(data);
  }
  clearLog(data) {
    log.clear();
  }
  _onModelChange() {
    log.append('MessagePresenter: model was changed, rerendering view');
    this._renderView();
  }
  _renderView() {
    const message = model.getMessage();
    this._view.render({message});
  }
}
