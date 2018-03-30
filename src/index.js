'use strict';

import MessageView from './views/Message';
import LogView from './views/Log';

document.addEventListener('DOMContentLoaded', () => {
  new MessageView();
  new LogView();
});
