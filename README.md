Flux
====

Паттерн Flux: представление берёт из *Хранилища* данные для отображения, а все изменения вносит только путем отправки сообщений в шину *Диспетчер*. Диспетчер последовательно доставляет сообщения во все хранилища, которые могут при необходимости отреагировать на каждое из полученных сообщений.

Демо
----
https://bakoushin.github.io/shri/architecture/flux/

Расположение
------------

Поскольку это ветка, после клонирования репозитория нужно переключиться в эту ветку:

`npm checkout flux` 

Сборка
------

Код JavaScript расположен в папке `src` и требует сборки или запуска dev-сервера.

`npm run build` – сборка бандла

`npm run dev` – запуск dev-сервера

Структура
---------

`dispatcher` – синглтон `Dispatcher`, перечень типов сообщений и обёртка для их удобной отправки

`stores` – хранилища

`views` – представления

Описание
--------

Компоненты с именем `Message` реализуют основную функциональность – отправку сообщения на сервер и обработку ответа.

Аналогично сделаны компоненты с именем `Log` – они используются для логирования. Лог отображается в интерфейсе и в консоли. События диспетчера не логируются, т.к. сообщения лога сами проходят через диспетчера – в этом случае получится бесконечная рекурсия. Каждое нажатие кнопки *Отправить на сервер* очищает лог.

Для хранилищ реализован базовый класс `Store`, в который вынесена общая для каждой из моделей функциональность: подписка на изменения модели (паттерн *Observer*). Предусмотрен механизм отмены подписки, который, правда, нигде не используется.
