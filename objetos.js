'use strict'
const fs = require('fs');

var implementados = "Los personajes con objetos dispoibles son:\n";
implementados += "antorcha\n";
implementados += "capitana\n";
implementados += "carnage\n";
implementados += "ciclope\n";
implementados += "cientifica\n";
implementados += "coloso\n";
implementados += "cosa\n";
implementados += "coulson\n";
implementados += "daredevil\n";
implementados += "drax\n";
implementados += "duende\n";
implementados += "elsa\n";
implementados += "falcon\n";
implementados += "fantastico\n";
implementados += "fenix\n";
implementados += "fury\n";
implementados += "gamora\n";
implementados += "groot\n";
implementados += "hela\n";
implementados += "invisible\n";
implementados += "ironfist\n"
implementados += "ironman\n";
implementados += "jessica\n";;
implementados += "jugger\n";
implementados += "killmonger\n";
implementados += "lobezno\n";
implementados += "magneto\n";
implementados += "mantis\n";
implementados += "maquina\n";
implementados += "mariposa\n";
implementados += "mbaku\n";
implementados += "motoqueiro\n";
implementados += "miles\n";
implementados += "minerva\n";
implementados += "mistica\n";
implementados += "msmarvel\n";
implementados += "mysterio\n";
implementados += "namor\n";
implementados += "okoye\n";
implementados += "pantera\n";
implementados += "punisher\n";
implementados += "pyro\n";
implementados += "rescue\n";
implementados += "rhino\n";
implementados += "rocket\n";
implementados += "ronan\n";
implementados += "sabretooth\n";
implementados += "shocket\n";
implementados += "shuri\n";
implementados += "siniestro\n";
implementados += "spiderman\n";
implementados += "starlord\n";
implementados += "stryfe\n";
implementados += "tormenta\n";
implementados += "ultron\n";
implementados += "venom\n";
implementados += "vulture\n";
implementados += "Para ejecutarlo usa el comando /objetos y el personaje que quieras ver.";


let App = function () { }

App.objetos = function (msg, bot) {

    var texto = msg.text.trim().split(" ");
    if (texto.length > 1) {
        var imagen = "./imagenes/objetos/" + texto[1] + ".jpg";


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