'use strict'
var App = function () { };

var enemigos = "@Mononoke0614 @Kurgan"

var st1 = "@Escipion87  @El_Comediante @Haokarlos @antpgar @Lia_lii @Goldo4125 @AITORDELIA @Lemonhase"
var st2 = " @CarreMSF @Orchryst @Lapipol @LuisCris @Guannnn @JuanRR_92 @saetix @PABLO_MV_FENIX"
var st3 = "@IDavila @Ismaelaz  @Puigdemont @Tomqui @AleixRisco  @SGRUNG @DiGuti85 @LoveluckA"
const listaCapis = ["CarreMSF", "El_Comediante", "Haokarlos", "Orchryst", "IDavila", "antpgar", "Escipion87", "Puigdemont"];
const andaluces = ["antpgar", "Puigdemont"];
App.mencion = function (msg, bot) {
    var nameUser = msg.from.username;
    if (nameUser == undefined) {
        nameUser = msg.from.first_name;
    }
    if (listaCapis.includes(nameUser)) {
        if (andaluces.includes(nameUser)) {
            bot.sendMessage(msg.chat.id, "No intentes engañarnos @" + msg.from.username + ". Sabemos que sigues de siesta.").then(function (data) {
                bot.sendPhoto(data.chat.id, "./imagenes/siesta.jpg")
            });

        }
        /*
        else if(nameUser=="Ismaelaz"){
            bot.sendMessage(msg.chat.id,"Por favor @"+msg.from.username+" este comando es muy importante. Confirma que estas en condiciones.").then(function (data) {
                bot.sendPhoto(data.chat.id, "./imagenes/siesta.jpg")
            });
        }
        */
        else if (nameUser == "IDavila") {
            bot.sendMessage(msg.chat.id, "@" + msg.from.username + " deja ese trabajo nuevo que no te deja tiempo para el juego. Ni para programarme.").then(function (data) {
                bot.sendPhoto(data.chat.id, "./imagenes/Trabajar.jpg")
            });
        }
        else {
            bot.deleteMessage(msg.chat.id, msg.message_id);
            bot.sendMessage(msg.chat.id, st1).then(function () {
                bot.sendMessage(msg.chat.id, st2).then(function () {
                    bot.sendMessage(msg.chat.id, st3).then(function () {
                        var mensaje = msg.text.trim().split(" ");
                        if (mensaje.length > 1) {
                            var texto = "";
                            for (var i = 1; i < mensaje.length; i++) {
                                texto += mensaje[i] + " ";
                            }
                            bot.sendMessage(msg.chat.id, texto).then(function (data) {
                                bot.pinChatMessage(data.chat.id, data.message_id)
                            });
                        }
                    });
                });
            });
        }
    }
    else {
        bot.sendMessage(msg.chat.id, "Función solo para capitanes").then(function (data) {
            setTimeout(function () {
                bot.deleteMessage(data.chat.id, data.message_id);
                bot.deleteMessage(data.chat.id, msg.message_id);
            }, 72000);
        });
    }

}


App.strike = function (msg, bot, strike) {
    var nameUser = msg.from.username;
    if (nameUser == undefined) {
        nameUser = msg.from.first_name;
    }
    if (listaCapis.includes(nameUser)) {
        let mencion = "";
        if (strike == 1) {
            mencion = st1;
        }
        if (strike == 2) {
            mencion = st2;
        }
        if (strike == 3) {
            mencion = st3;
        }
        bot.deleteMessage(msg.chat.id, msg.message_id);
        bot.sendMessage(msg.chat.id, mencion).then(function () {
            var mensaje = msg.text.trim().split(" ");
            if (mensaje.length > 1) {
                var texto = "";
                for (var i = 1; i < mensaje.length; i++) {
                    texto += mensaje[i] + " ";
                }
                bot.sendMessage(msg.chat.id, texto)
            }
        });
    }
    else {
        bot.sendMessage(msg.chat.id, "Función solo para capitanes").then(function (data) {
            setTimeout(function () {
                bot.deleteMessage(data.chat.id, data.message_id);
                bot.deleteMessage(data.chat.id, msg.message_id);
            }, 72000);
        });
    }
}

var report = 576142216
App.control = function (msg, bot) {
    var nameUser = msg.from.username;

    if (msg.chat.title.includes("Palmeros de Joselof") || msg.chat.title.includes("MV Fenix") || st1.includes(nameUser) || st2.includes(nameUser) || st3.includes(nameUser)) {
        return true;
    }
    else {
        if (enemigos.includes(nameUser)) {
            bot.sendMessage(msg.chat.id,"Pensaste que una sucia rata como tu podría usarme? "+nameUser+" no me hagas reir. No mereces todo el trabajo que ha costado programarme. Espero que te vaya bien, aunque con tu gran egoismo va a ser complicado")
        }
        else {
            bot.sendMessage(msg.chat.id, "Solo estoy al servicio de MV Fenix. Larga y prospera vida al Lidl.")
        }
        bot.sendMessage(report, nameUser + " esta intentado acceder a mis servicios.");



        return false;
    }

}



module.exports = App;