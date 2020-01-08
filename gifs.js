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
    bot.sendVideo(msg.chat.id, "./gif/asgardianos.mp4")
       
}

App.banquillo = function (msg, bot) {

    bot.sendVideo(msg.chat.id, "./gif/banquillo.mp4")
       
}


module.exports = App;