'use strict';

import Dispatcher from './Dispatcher';
import actionTypes from './actionTypes';

export default {
  send(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.SEND
    });
  },
  log(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.LOG
    });
  },
  clearLog(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.CLEAR_LOG
    });
  }
};
