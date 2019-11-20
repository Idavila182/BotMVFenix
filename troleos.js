'use strict'
var App = function () { };


App.manos = function (msg, bot) {

    bot.deleteMessage(msg.chat.id, msg.message_id);
    bot.sendVideo(msg.chat.id, "./gif/manos.mp4")
       
}





module.exports = App;