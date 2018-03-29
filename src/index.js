'use strict';

import MainView from './views/MainView';
import LogView from './views/LogView';

document.addEventListener('DOMContentLoaded', () => {
  const logView = new LogView('.log');
  const mainView = new MainView('.view-stub');
});
