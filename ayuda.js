'use strict'
var App = function () { };

var texto = "Mis comandos son :\n";
texto += " /all menciona a todos las personas del grupo. Si se añade un mensaje lo envia y ancla.(Solo capitanes)";
texto += " /alfa /beta /gamma /ultimus para ver el mapa de la incursion correspondiente\n";
texto += " /calma para cuando la cosa se pone tensa.\n";
texto += " /counter para ver imagenes de los counter de guerra.\n";
texto += " /counter + equipo/personaje para ver video de counter.\n";
texto += " /dep para ver si sigo vivo\n";
texto += " /documento para obtener el pdf de la alianza\n";
texto += " /discord para obtener el enlace de discord del grupo\n";
texto += " /guerra para obtener un mensaje de apoyo a las tropas\n";
texto += " /manos para gif de las manos para cuando alguien la lia en ataque, como por ejemplo @Puigdemont\n";
texto += " /minimo para obtener una foto con el poder minimo para desbloquear legendarios\n";
texto += " /mundial para obtener los puntos de ese día para el guerrero mundial\n";
texto += " /mvp para obtener el último mvp\n";
texto += " /naranjas para obtener un listado de los equipos con recomendación de naranjas\n";
texto += " /naranjas + equipo para obtener la imagen de los naranjas para ese equipo\n";
texto += " /objetos para obtener un listado de los personajes con los objetos necesarios\n";
texto += " /objetos + personaje para obtener la imagen de los objetos para ese personaje\n";
texto += " /planguerra para ver el plan a seguir en las guerras.\n";
texto += " /unicos para obtener la imagen de los objetos unicos para categoria 13\n";
texto += "se aceptan sugerencias para comando nuevos";

App.ayuda = function (msg, bot) {
    bot.sendMessage(msg.chat.id, texto).then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}




module.exports = App;