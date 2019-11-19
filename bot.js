//Token = 952499974:AAFSlojNJVArKJ72aEq7JWT3-3sanythpU0
'use strict'
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const incrusion = require("./incursiones.js");
const objetos = require("./objetos.js");
const ayuda = require("./ayuda.js");
const naranjas = require("./naranjas.js");
const varios = require("./varios.js");
const guerrero = require("./guerroMundial.js");
const mencion = require("./mencion.js");
const guerra = require("./guerra.js")

// API Token Telegram
const token = '952499974:AAFSlojNJVArKJ72aEq7JWT3-3sanythpU0';
const bot = new TelegramBot(token, { polling: true });
// Create a bot that uses 'polling' to fetch new updates
bot.on('polling_error', function (error) {
    console.log(error);
});


// #region Start/Stop
bot.onText(/^\/start/, function (msg) {
    var chatId = msg.chat.id;
    var nameUser = msg.from.first_name;
    bot.sendMessage(chatId, "Ya me han actualizado.\nMira mis novedades en /help")
    bot.deleteMessage(msg.chat.id, msg.message_id);

});

bot.onText(/^\/stop/, function (msg) {
    var chatId = msg.chat.id;

    bot.sendMessage(chatId, "Me desconecto de momento.\nNo me echéis mucho de menos.")
    bot.deleteMessage(msg.chat.id, msg.message_id);
});
// #endregion

// #region Incursiones
bot.onText(/\/alfa/, (msg) => {
    incrusion.alfa(msg, bot)
});

bot.onText(/\/beta/, (msg) => {
    incrusion.beta(msg, bot)
});

bot.onText(/\/gamma/, (msg) => {
    incrusion.gamma(msg, bot);
});

bot.onText(/\/ultimus/, (msg) => {
    incrusion.ultimus(msg, bot)
});
// #endregion

bot.onText(/\/naranjas/, (msg) => {
    naranjas.naranjas(msg, bot)
});

bot.onText(/\/objetos/, (msg) => {
    objetos.objetos(msg, bot);
});

bot.onText(/\/help/, (msg) => {

    ayuda.ayuda(msg, bot)
})

bot.onText(/\/unicos/, (msg) => {
    varios.unicos(msg, bot);
});


bot.on('message', function (msg) {
    varios.mencion(msg, bot);
});

bot.on('message', function (msg) {
    varios.holaAdios(msg, bot);
});

bot.onText(/\/documento/, (msg) => {
    varios.documento(msg, bot);

});


bot.onText(/\/guerra/, (msg) => {
    bot.sendMessage(msg.chat.id, "5 ataques en las 3 primeras horas fdp! Dónde están los refuerzos defensivos q no los veo. Sois todos una panda de vagos");
});


bot.onText(/\/mundial/, (msg) => {
    guerrero.puntos(msg, bot);
});

bot.onText(/\/discord/, (msg) => {

    varios.discord(msg, bot);
});

bot.onText(/\/minimo/, (msg) => {

    varios.mimimo(msg, bot);
});
bot.onText(/\/counter/, (msg) => {
    varios.counter(msg, bot);
});

bot.onText(/\/mvp/, (msg) => {

  guerra.mvp(msg, bot);

});

bot.onText(/\/planguerra/, (msg) => {

    guerra.planGuerra(msg, bot);
  
  });

bot.onText(/\/calma/, (msg) => {

    bot.sendPhoto(msg.chat.id, "./imagenes/calma.jpg")
    bot.deleteMessage(msg.chat.id, msg.message_id);

});

//fotos Carre
bot.on("photo", (msg) => {
    //console.log(msg)
    if (msg.from.first_name == "Carre") {
        // console.log("entra")
        bot.sendMessage(msg.chat.id, "Ya sabemos que eres el mejor. Deja de restregarnoslo")
    }/*
    else {
        bot.sendMessage(msg.chat.id, "Animo. Entre todo podemos derrotar a Carre")
    }
*/

});
bot.on('message', function (msg) {
    if (msg.from.first_name == "Carre" && msg.text != undefined) {
        var texto = msg.text.split(" ");
        for (var i = 0; i < texto.length; i++) {
            if (texto[i][texto[i].length - 1] == "k"){
                var num = parseInt(texto[i].slice(0, -1));
                if(num!=NaN && num >250){
                    bot.sendMessage(msg.chat.id, "¿Piensas que nos impresionas? Deberias subir otro equipo que ese ya no vale.")
                }
            }
        }
        //  bot.sendMessage(msg.chat.id, "Buuuuu. Ese equipo no vale nada")
    }
});

bot.onText(/\/all/, (msg) => {
    mencion.mencion(msg, bot);
});

bot.onText(/\/dep/, (msg) => {
    bot.sendMessage(msg.chat.id,"No te equivoques @"+msg.from.username+" estoy muy vivo. Te mando una imagen que representa tu estado el el juego.").then(function (data) {
        bot.sendPhoto(data.chat.id, "./imagenes/DEP.jpg")
    });


});


bot.on('message', function (msg) {
    if (msg.text != undefined) {
        var mensaje = msg.text.trim().split(" ");
        if (mensaje[0].includes("@strike")) {
            let num = parseInt(mensaje[0][mensaje[0].length - 1]);
            if (num != NaN && num <= 3 && num >= 1) {
                mencion.strike(msg, bot, num);
            }
        }
    }
});

bot.onText(/\/prueba/, (msg) => {
    console.log(msg.chat.id)
    bot.sendMessage(msg.chat.id, "Alabad a vuestro dios MVFexixbot").then(function (data) {
        bot.pinChatMessage(data.chat.id, data.message_id)
    });
    bot.getChat(msg.chat.id).then(function (data) {
        console.log(data);
    });
});


/*

bot.onText(/\/botones/, (msg) => {
    var botones = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Boton 1", callback_data: 'boton1' },
                    { text: "Boton 2", callback_data: 'boton2' }
                ],
                [
                    { text: "Boton 3", callback_data: 'boton3' },
                    { text: "Boton 4", callback_data: 'boton4' }
                ]
            ]
        }

    };

    bot.sendMessage(msg.chat.id, "Subir a aim a 200k minimo. Estais tardando", botones);
    /*   bot.sendMessage(msg.chat.id, "Subir a ", {
           reply_markup: {
               inline_keyboard: [
                   [
                       { text: "Boton 3", callback_data: 'boton3' },
                       { text: "Boton 4", callback_data: 'boton4' }
                   ]
               ]
           }
       });*//*
bot.on("callback_query", function onCallbackQuery(acction) {

const data = acction.data;
const msg = acction.message;
var bt =/*JSON.stringify({
inline_keyboard: [
[
{ text: "Boton 5", callback_data: 'boton5' },
{ text: "Boton 6", callback_data: 'boton6' }
],
[
{ text: "Boton 7", callback_data: 'boton7' },
{ text: "Boton 8", callback_data: 'boton8' }
]
]
}//)

if (data == "boton1") {
bot.editMessageReplyMarkup(msg.chat.id, {
reply_markup: bt
});

}
if (data == "boton2") {
bot.sendMessage(msg.chat.id, "Bot 2");
}
if (data == "boton3") {
bot.sendMessage(msg.chat.id, "Bot 3");
}
if (data == "boton4") {
bot.sendMessage(msg.chat.id, "Bot 4");
}


})
});
*/
