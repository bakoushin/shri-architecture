'use strict';

import LogModel from '../models/Log';
import LogView from '../views/Log';

export default class LogController {
  constructor() {
    this.view = new LogView(this);
    LogModel.onChange(this.onModelChange.bind(this));
  }
  onModelChange() {
    this.renderView();
  }
  addItem(data) {
    LogModel.addItem(data);
  }
  clear() {
    LogModel.clear();
  }
  renderView() {
    const items = LogModel.getAll();
    this.view.render({items});
  }
}
