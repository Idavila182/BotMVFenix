'use strict'

var App = function () { };

App.mvp = function (msg, bot) {
    bot.sendMessage(msg.chat.id, "@Escipion87 deja de robar mvp que todos sabemos que los compras")
    bot.deleteMessage(msg.chat.id, msg.message_id);
}

var plan = "Plan de guerra MV Fénix.\nObjetivos prioritarios: armería, ala media y barracones."
plan+="\nObjetivos secundarios habituales, que ayudan a limpiar mejor esas salas: sala seguridad e ingeniería."
plan+="\nUna vez limpiado esas salas, se va a por puente, o antes si no tiene ninguna sala colindante dándole ventajas."
plan+="\nNormalmente después de puente nos encontramos con 2 opciones: reactor o ir a cubiertas y salas a medias (bodega, hangar), desechando la opción de tocar reactor y tirar el helicarrier."
plan+="\nVarios factores deciden que opción escoger según la guerra: defensa del rival, poder de los defensores en sala, equipos atacantes restantes en guerra, participación… Además de su orden, si interesa quitar hangar por ejemplo."
plan+="\nEstrategias con las salas en función de la puntuación:\nSi vamos ganando las salas se tiran enteras, para aumentar la diferencia y minar la moral del rival."
plan+="\nSi vamos perdiendo, se intenta dejar 2 equipos x defensor, para evitar cualquier sorpresa y con un ataque coordinado hacer muchos puntos en un breve periodo de tiempo."

App.planGuerra = function (msg, bot) {
    bot.sendMessage(msg.chat.id, plan)
    bot.deleteMessage(msg.chat.id, msg.message_id);
}




module.exports = App;