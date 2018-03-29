'use strict';

import Dispatcher from '../flux/Dispatcher';
import actionTypes from './actionTypes';

export default class Actions {
  static send(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.SEND
    });
  }
  static log(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.LOG
    });
  }
  static clearLog(data) {
    Dispatcher.dispatch({
      data,
      type: actionTypes.CLEAR_LOG
    });
  }
}
