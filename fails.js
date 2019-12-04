'use strict'

var App = function () { };
const fs = require('fs');
var fail = [];
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: './documentos/fails.csv',
    header: [
        { id: '', title: '' },
        { id: 'nombre', title: 'nombre' },
        { id: 'num', title: 'num' },
    ],
    alwaysQuote: true
});


App.obtenerFail = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    fs.createReadStream('./documentos/fails.csv')
        .pipe(csv())
        .on('data', (data) => fail.push(data))
        .on('end', () => {
            console.log(fail);
        });
}


App.sumarFail = function (msg, bot) {
    var texto = msg.text.trim().split(" ");
    fs.createReadStream('./documentos/fails.csv')
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
            console.log("add: ", fail);
            csvWriter
                .writeRecords([])
                .then(function () {
                    csvWriter
                        .writeRecords(fail)
                        .then(() => console.log('The CSV file was written successfully'));
                });
        });
}






module.exports = App;