MVP
===

Паттерн Model-View-Presenter: модель и представление напрямую не взаимодействуют друг с другом. Всё делается только через представителя.

Демо
----
https://bakoushin.github.io/shri/architecture/mvp/

Структура
---------

`models` – модели

`presenters` – представители

`views` – представления

Описание
--------

Компоненты с именем `Message` реализуют основную функциональность – отправку сообщения на сервер и обработку ответа.

Аналогично сделаны компоненты с именем `Log` – они используются для логирования. Лог отображается в интерфейсе и в консоли. Каждое нажатие кнопки *Отправить на сервер* очищает лог.

Для моделей реализован базовый класс `Model`, в который вынесена общая для каждой из моделей функциональность: подписка на изменения модели (паттерн *Observer*). Предусмотрен механизм отмены подписки, который, правда, нигде не используется.
