'use strict'

let App = function () { }

App.alfa = function (msg, bot) {
    bot.sendPhoto(msg.chat.id, "./imagenes/alfa.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}

App.beta=function(msg, bot) {
    bot.sendPhoto(msg.chat.id, "./imagenes/beta.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}

App.gamma=function(msg,bot){
    bot.sendPhoto(msg.chat.id, "./imagenes/gamma.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}

App.ultimus=function(msg,bot){
    bot.sendPhoto(msg.chat.id, "./imagenes/ultimus.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}


module.exports = App;