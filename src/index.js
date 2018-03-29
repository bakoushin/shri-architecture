'use strict';

import MainView from './views/MainView';
import LogView from './views/LogView';

document.addEventListener('DOMContentLoaded', () => {
  new MainView();
  new LogView();
});
