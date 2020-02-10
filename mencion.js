'use strict'
var App = function () { };

var enemigos = "@Mononoke0614 @Kurgan"

var st1 = "@Jjironwolf  @CooGuti @Goldo4125 @AITORDELIA Eddu @LuffyFly @criptoKael @SanMateoSF"
var st2 = " @Orchryst @DaniArevalo @LuisCris @Killer_chris @Guannnn @saetix @PABLO_MV_FENIX @El_Comediante"
var st3 = "@IDavila  @Puigdemont @Tomqui  @SGRUNG @VictorMakako @ZARVEL @Khildran @ivirius121"
const listaCapis = ["El_Comediante", "Orchryst", "IDavila", "@AITORDELIA", "@VictorMakako","@SanMateoSF","@ZARVEL","@Khildran"];
const andaluces = ["antpgar", "Puigdemont"];
var amigos = "@Escipion87 @Haokarlos @antpgar @CarreMSF @Lapipol @JuanRR_92 @AleixRisco @DiGuti85 "
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

    if (enemigos.includes(nameUser)) {
        bot.sendMessage(msg.chat.id, "Pensaste que una sucia rata como tu podría usarme? " + nameUser + " no me hagas reir. No mereces todo el trabajo que ha costado programarme. Espero que te vaya bien, aunque con tu gran egoismo va a ser complicado")

        bot.sendMessage(msg.chat.id, "Solo estoy al servicio de AMF Fenix. Larga y prospera vida al Lidl.")

        bot.sendMessage(report, nameUser + " esta intentado acceder a mis servicios.");

        return false;
    }
    return true;

}



module.exports = App;