'use strict';

import model from '../models/Message';
import log from '../controllers/Log';

class MessageController {
  onApplyClick(view) {
    log.addItem('MessageController: saving message to model');
    model.saveMessage(view.input.value);
  }
}

export default new MessageController();
