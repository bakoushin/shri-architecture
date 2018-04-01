MVC
===

Паттерн Model-View-Controller: представление берёт из модели данные для отображения, а все изменения вносит только через контроллер.

Демо
----
https://bakoushin.github.io/shri/architecture/mvc/

Расположение
------------

Поскольку это ветка, после клонирования репозитория нужно переключиться в эту ветку:

`npm checkout mvc` 

Сборка
------

Код JavaScript расположен в папке `src` и требует сборки или запуска dev-сервера.

`npm run build` – сборка бандла

`npm run dev` – запуск dev-сервера

Структура
---------

`models` – модели

`controllers` – контроллеры

`views` – представления

Описание
--------

Компоненты с именем `Message` реализуют основную функциональность – отправку сообщения на сервер и обработку ответа.

Аналогично сделаны компоненты с именем `Log` – они используются для логирования. Лог отображается в интерфейсе и в консоли. Каждое нажатие кнопки *Отправить на сервер* очищает лог.

Для моделей реализован базовый класс `Model`, в который вынесена общая для каждой из моделей функциональность: подписка на изменения модели (паттерн *Observer*). Предусмотрен механизм отмены подписки, который, правда, нигде не используется.
