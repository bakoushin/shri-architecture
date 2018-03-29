"use strict";

import View from "../flux/View";
import Dispatcher from "../flux/Dispatcher";
import MessageStore from "../stores/MessageStore";
import actionTypes from "../stores/actionTypes";

export default class MainView extends View {
  constructor(selector) {
    super(selector);
    this._label = this._element.querySelector(".view-stub__label");
    this._input = this._element.querySelector(".view-stub__input");
    this._applyButton = this._element.querySelector(".view-stub__apply");
    this._applyButton.addEventListener("click", this.onApplyClick.bind(this));
    MessageStore.addChangeListener(this.onMessageStoreChange.bind(this));
  }
  render() {
    const message = MessageStore.getMessage();
    this._label.textContent = message;
  }
  onApplyClick(e) {
    Dispatcher.dispatch({
      type: actionTypes.LOG,
      data: "Apply is clicked"
    });
    Dispatcher.dispatch({
      type: actionTypes.SEND,
      data: this._input.value
    });
  }
  onMessageStoreChange() {
    this.render();
  }
}
