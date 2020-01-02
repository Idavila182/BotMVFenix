'use strict'
var App = function () { };

var st1 = "@Escipion87  @El_Comediante @Haokarlos @antpgar @Lia_lii @Goldo4125 @AITORDELIA @Lemonhase"
var st2 = " @CarreMSF @Orchryst @Lapipol @LuisCris @ConyandanteJefe @JuanRR_92 @saetix @Kurgan"
var st3 = "@IDavila @Ismaelaz  @Puigdemont @Tomqui @AleixRisco @Mononoke0614 @SGRUNG @DiGuti85"
const listaCapis = ["CarreMSF", "El_Comediante", "Haokarlos", "Orchryst", "IDavila", "antpgar", "Escipion87", "Puigdemont"];
const andaluces = ["antpgar", "Puigdemont"];
App.mencion = function (msg, bot) {
    var nameUser = msg.from.username;
    if (nameUser == undefined) {
        nameUser = msg.from.first_name;
    }
    if (listaCapis.includes(nameUser)) {
        if (andaluces.includes(nameUser)) {
            bot.sendMessage(msg.chat.id,"No intentes engañarnos @"+msg.from.username+". Sabemos que sigues de siesta.").then(function (data) {
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
        else if(nameUser=="IDavila"){
            bot.sendMessage(msg.chat.id,"@"+msg.from.username+" deja ese trabajo nuevo que no te deja tiempo para el juego. Ni para programarme.").then(function (data) {
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



module.exports = App;