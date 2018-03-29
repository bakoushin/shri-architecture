"use strict";

import View from "../flux/View";
import LogStore from "../stores/LogStore";

export default class LogView extends View {
  constructor(selector) {
    super(selector);
    LogStore.addChangeListener(this.onLogStoreChange.bind(this));
  }
  render() {
    const items = LogStore.getAll();
    this._element.innerHTML = "";
    this._element.innerHTML = items
      .map(item => `<li>log: ${item}</li>`)
      .join("\n");
  }
  onLogStoreChange() {
    this.render();
  }
}
