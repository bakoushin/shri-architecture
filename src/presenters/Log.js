'use strict';

import model from '../models/Log';

export default class LogPresenter {
  constructor(view) {
    this._view = view;
    model.onChange(this._onModelChange.bind(this));
  }
  _onModelChange() {
    this._renderView();
  }
  _renderView() {
    const items = model.getAll();
    this._view.render({items});
  }
}
