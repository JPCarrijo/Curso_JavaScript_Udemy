const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/3 * 14 * * 4', function () { // 'intervalo, minuto, hora, dia, mês, diaSemana'
  console.log(`Executando tarefa 1!`, new Date().getSeconds());
})

setTimeout(function() {
  tarefa1.cancel()
  console.log(`Cancelando tarefa 1!`)
}, 20000)

// setImmediate()
// setInterval(() => {

// }, interval);

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log(`Executando Tarefa 2!`, new Date().getSeconds());
})