'use strict'
var App = function () { };


App.manos = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/manos.mp4")
       
}

App.nodos = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/nodos.mp4")
       
}

App.cuchillo = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/cuchillo.mp4")
       
}

App.fail = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/fail.mp4")
       
}

App.cable = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/cable.mp4")
       
}

App.odin = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/odin.mp4")
       
}

App.emerito = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/emerito.mp4")
       
}

App.xavale = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/xavale.mp4")
       
}

App.nohomo = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/nohomo.mp4")
       
}

App.latigo = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/latigo.mp4")
       
}

App.choca = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/choca.mp4")
       
}

App.banquillo = function (msg, bot) {

    bot.sendVideo(msg.chat.id, "./gif/banquillo.mp4")
       
}

App.barco = function (msg, bot) {

    bot.sendVideo(msg.chat.id, "./gif/barco.mp4")
       
}

App.palomitas = function (msg, bot) {

    bot.sendVideo(msg.chat.id, "./gif/palomitas.mp4")
       
}

module.exports = App;