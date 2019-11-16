'use strict'

var puntuacion = [4900, 6125, 7350, 8575, 1225, 2450, 3675];
var App = function () { };

App.puntos = function (msg, bot) {
    var fecha = new Date();
    var pos = fecha.getDay();

    if (fecha.getHours() < 1) {
        if (pos == 0) {
            pos = 6;
        }
        else {
            pos--
        }
    }
    var punt = puntuacion[pos];

    bot.sendMessage(msg.chat.id, "La puntuacion minima de hoy es de " + punt + " puntos por jugador y "+punt*24+" de la alianza");
    bot.deleteMessage(msg.chat.id, msg.message_id);
}


module.exports = App;