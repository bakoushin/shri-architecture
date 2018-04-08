import model from '../models/Message';
import MessageController from '../controllers/Message';

export default class MessageView {
  constructor() {
    this._controller = new MessageController();
    this.element = document.querySelector('.view-stub');
    this.label = this.element.querySelector('.view-stub__label');
    this.input = this.element.querySelector('.view-stub__input');
    this.apply = this.element.querySelector('.view-stub__apply');
    this.apply.addEventListener('click', this._onApplyClick.bind(this));
    model.onChange(this._onModelChange.bind(this));
  }
  _render() {
    const message = model.getMessage();
    this.label.textContent = `Сервер принял данные: ${message}`;
  }
  _onApplyClick(e) {
    this._controller.clearLog();
    this._controller.log('MessageView: apply button was clicked, calling controller');
    this._controller.onApplyClick(this);
  }
  _onModelChange() {
    this._controller.log('MessageView: model was changed, rerendering');
    this._render();
  }
}
