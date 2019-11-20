'use strict'

var App = function () { };
const fs = require('fs');
var implementados = "Los equipos con prioridad de naranjas dispoibles son:\n";
implementados += "4f\n";
implementados += "aim\n";
implementados += "armaduras\n";
implementados += "gtm\n";
implementados += "guardianes\n";
implementados += "shield\n";
implementados += "siniestros\n";
implementados += "sobrenaturales\n";
implementados += "wakandianos\n";
implementados += "xmen\n";

App.naranjas = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    if (texto.length > 1) {
        var imagen = "./imagenes/" + texto[1] + ".jpg";


        if (fs.existsSync(imagen)) {
            bot.sendPhoto(msg.chat.id, imagen).then(function (data) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, data.message_id);
                    bot.deleteMessage(data.chat.id, msg.message_id);
                }, 72000);
            });
        }
        else {
            bot.sendMessage(msg.chat.id, "Equipo " + texto[1] + " no disponible. Ejecuta el comando naranjas solamete para ver los equipos disponibles").then(function (data) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, data.message_id);
                    bot.deleteMessage(data.chat.id, msg.message_id);
                }, 72000);
            });
        }
    }
    else {


        implementados += "Para ejecutarlo usa el comando /naranjas y el equipo que quieras ver.";
        bot.sendMessage(msg.chat.id, implementados).then(function (data) {
            setTimeout(function () {
                bot.deleteMessage(data.chat.id, data.message_id);
                bot.deleteMessage(data.chat.id, msg.message_id);
            }, 72000);
        });
    }

}

module.exports = App;