'use strict';

import model from '../models/Log';

class LogController {
  addItem(data) {
    model.addItem(data);
  }
  clear() {
    model.clear();
  }
}

export default new LogController();
