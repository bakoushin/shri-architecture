'use strict';

import MessageController from './controllers/Message';
import LogController from './controllers/Log';

document.addEventListener('DOMContentLoaded', () => {
  const messageController = new MessageController();
  const logController = new LogController();
  messageController.renderView();
  logController.renderView();
});
