'use strict'
var App = function () { };

var archivo = "MVFenix";
App.documento = function (msg, bot) {
    bot.sendDocument(msg.chat.id, "./documentos/MVFenix.pdf").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}

App.holaAdios = function (msg, bot) {
    var chatId = msg.chat.id;
    var chatId = msg.chat.id;
    var chatitle = msg.chat.title;
    if (msg.new_chat_members != undefined) {

        var nameNewMember = msg.new_chat_member.first_name;

        bot.sendMessage(chatId, "Hola " + nameNewMember + ", bienvenido al grupo " + chatitle);
        bot.sendDocument(msg.chat.id, "./documentos/MVFenix.pdf");
    }
    else if (msg.left_chat_member != undefined) {

        var nameLeftMember = msg.left_chat_member.first_name;

        bot.sendMessage(chatId, nameLeftMember + " abandonó el grupo")
    }
}
const listaCapis = ["Carre", "El_Comediante", "Haokarlos", "David", "Ismaelaz", "IDavila", "antpgar"];

App.mencion = function (msg, bot) {
    if (msg.text != undefined) {
        const match = /^@\w+$/.exec(msg.text.trim());
        if (match && match.input == "@MVFenixbot") {
            var nameUser = msg.from.username;
            var texto = "\n¿En que puedo ayudarte?\nPara conocer mis comandos ejecuta /help"
            if (nameUser == undefined) {
                nameUser = msg.from.first_name;
            }
            var chatId = msg.chat.id;
            if (listaCapis.includes(nameUser)) {
                nameUser = "Capitan " + nameUser;
            }
            if (nameUser == "Escipion87") {
                nameUser = " amado Lidl"
            }
            if (nameUser == "Puigdemont") {
                nameUser = " mascota";
                texto = ". No molestes y deja de ser tan pesado con la ortografia."
            }

            bot.sendMessage(chatId, "Hola " + nameUser + texto).then(function (data) {
                setTimeout(function () {
                    bot.deleteMessage(data.chat.id, data.message_id);
                    bot.deleteMessage(data.chat.id, msg.message_id);
                }, 72000);
            });
        }
    }

}

App.unicos = function (msg, bot) {
    bot.sendPhoto(msg.chat.id, "./imagenes/unicos.jpg").then(function (data) {

        /* bot.sendPhoto(msg.chat.id, "./imagenes/unicos14.jpg").then(function (data2) {
             setTimeout(function () {*/
        bot.deleteMessage(data.chat.id, data.message_id);
        // bot.deleteMessage(data.chat.id, data2.message_id);
        bot.deleteMessage(data.chat.id, msg.message_id);
        //}, 72000);
        // });
    });
}



App.discord = function (msg, bot) {
    bot.sendMessage(msg.chat.id, "https://discord.gg/P77JS5u").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}

App.difusion = function (msg, bot) {
    bot.sendMessage(msg.chat.id, "https://t.me/joinchat/AAAAAE8Y4rYUdsyN6p5KlA").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}



App.mimimo = function (msg, bot) {

    bot.sendPhoto(msg.chat.id, "./imagenes/minimo.jpg").then(function (data) {
        setTimeout(function () {
            bot.deleteMessage(data.chat.id, data.message_id);
            bot.deleteMessage(data.chat.id, msg.message_id);
        }, 72000);
    });
}




module.exports = App;