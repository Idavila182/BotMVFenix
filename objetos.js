'use strict'
const fs = require('fs');

var implementados = "Los personajes con objetos dispoibles son:\n";
implementados += "ultron\n";
implementados += "Para ejecutarlo usa el comando /objetos y el personaje que quieras ver.";


let App = function () { }

App.objetos = function (msg, bot) {

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
            bot.sendMessage(msg.chat.id, "Objetos del personaje " + texto[1] + " no disponible. Ejecuta el comando naranjas solamete para ver los equipos disponibles").then(function (data) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, data.message_id);
                    bot.deleteMessage(data.chat.id, msg.message_id);
                }, 72000);
            });
        }
    }
    else {
      
        bot.sendMessage(msg.chat.id, implementados).then(function (data) {
            setTimeout(function () {
                bot.deleteMessage(data.chat.id, data.message_id);
                bot.deleteMessage(data.chat.id, msg.message_id);
            }, 72000);
        });
    }
}

module.exports = App;