'use strict';

import MessageModel from '../models/Message';
import MessageView from '../views/Message';
import LogController from '../controllers/Log';

export default class MessageController {
  constructor() {
    this.view = new MessageView(this);
    MessageModel.onChange(this.onModelChange.bind(this));
    this.log = new LogController();
  }
  onModelChange() {
    this.log.addItem('MessageController: model changes, rendering view');
    this.renderView();
  }
  onApplyClick(view) {
    this.log.addItem('MessageController: saving message to model');
    MessageModel.saveMessage(view.input.value);
  }
  renderView() {
    const message = MessageModel.getMessage();
    this.view.render({message});
  }
}
