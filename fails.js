'use strict'

var App = function () { };
const fs = require('fs');
var fail = [];
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const archivo = './documentos/fails.csv';

const csvWriter = createCsvWriter({
    path: archivo,
    header: [
        { id: '', title: '' },
        { id: 'nombre', title: 'nombre' },
        { id: 'num', title: 'num' },
    ],
});

App.obtenerFail = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    fail=[];
    fs.createReadStream(archivo)
        .pipe(csv())
        .on('data', (data) => fail.push(data))
        .on('end', () => {
            var men = visualizar(fail)
            bot.sendMessage(msg.chat.id, men)
        });
}


App.sumarFail = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    if (fail.length == 0) {
        fail=[];
        fs.createReadStream(archivo)
            .pipe(csv())
            .on('data', (data) => fail.push(data))
            .on('end', () => {
                for (var i = 0; i < fail.length; i++) {
                    console.log(texto[1] + " - " + fail[i].nombre)
                    if (texto[1] == fail[i].nombre) {
                        // console.log("in: "+parseInt(fail[i].num)++)
                        var numero = parseInt(fail[i].num, 10);
                        fail[i].num = numero + 1;
                        break;
                    }
                }
                console.log("add111111111111: ", fail);
                csvWriter
                    .writeRecords(fail)
                    .then(() => console.log('The CSV file was written successfully'));

            });
    }
    else {
        for (var i = 0; i < fail.length; i++) {
            console.log(texto[1] + " - " + fail[i].nombre)
            if (texto[1] == fail[i].nombre) {
                // console.log("in: "+parseInt(fail[i].num)++)
                var numero = parseInt(fail[i].num, 10);
                fail[i].num = numero + 1;
                break;
            }
        }
        console.log("add2222222: ", fail);
        csvWriter
            .writeRecords(fail)
            .then(() => console.log('The CSV file was written successfully'));

    }

}

function visualizar(fails) {
    var mensaje = "";
    for (var i = 0; i < fails.length; i++) {
        mensaje += fails[i].nombre + " - " + fails[i].num + "\n";
    }
    return mensaje;
}






module.exports = App;