'use strict'

var App = function () { };

App.mvp = function (msg, bot) {
    bot.sendMessage(msg.chat.id, "@Escipion87 deja de robar mvp que todos sabemos que los compras")
    bot.deleteMessage(msg.chat.id, msg.message_id);
}



module.exports = App;