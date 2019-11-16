var CronJob = require('cron').CronJob;
// Patrón de cron
// Corre todos los lunes a la 1:00 PM
new CronJob('0 14 * * *', function() {
  // Código a ejecutar
}, function() {
  console.log("ejecuta: ",new Date())
}, true);