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



App.banquillo = function (msg, bot) {

    bot.sendVideo(msg.chat.id, "./gif/banquillo.mp4")
       
}


module.exports = App;