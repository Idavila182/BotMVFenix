'use strict'
var App = function () { };

var CronJob = require('cron').CronJob;
// Patrón de cron
// Corre todos los lunes a la 1:00 PM
App.avisoPrueba = function () {
  console.log("arranca")
  new CronJob('0 10 10 * * *', function () {
    // Código a ejecutar
  }, function () {
    console.log("ejecuta: ", new Date())
  }, true);
}

module.exports = App;