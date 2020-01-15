'use strict'

var App = function () { };

var implemntados = "Para ver videos sobre un counter concreto escribe el comando counter y el nombre que quieras. Los videos disponibles son:"
implemntados += "\ncoulson sobrenatural";


App.counter = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    if (texto.length == 1) {
        bot.sendPhoto(msg.chat.id, "./imagenes/WarCounters.jpg").then(function (data) {
          /*  bot.sendMessage(msg.chat.id, implemntados).then(function (dataM) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, dataM.message_id);
                }, 72000);
            });
            */
            setTimeout(function () {
                bot.deleteMessage(data.chat.id, data.message_id);
                bot.deleteMessage(data.chat.id, msg.message_id);
            }, 72000);
        });
    }
    else {
        if (texto[1] == "coulson") {
            bot.sendMessage(msg.chat.id, "https://youtu.be/UiI2l3USRj4").then(function (data) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, data.message_id);
                    bot.deleteMessage(data.chat.id, msg.message_id);
                }, 72000);
            });
        }

    }
}


App.guia = function (msg, bot) {
    bot.sendPhoto(msg.chat.id, "./imagenes/defguide.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}


module.exports = App;
