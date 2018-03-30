'use strict';

import model from '../models/Message';
import log from '../models/Log';

export default class MessageController {
  onApplyClick(view) {
    log.append('MessageController: ok, saving the message in a model');
    model.setMessage(view.input.value);
  }
  log(data) {
    log.append(data);
  }
  clearLog() {
    log.clear();
  }
}
