var chalk = require('chalk');
var prompt = require('prompt');

var hello = function () {
    console.log(chalk.red('Добрый день! Введите Ваше ФИО: '));
    
    prompt.start();
    prompt.get(['Имя', 'Фамилия', 'Отчество'], function (err, result) {
    
    console.log('Проверьте правильность ФИО: ');
    console.log(chalk.bgRed('Имя: ' + result.Имя));
    console.log(chalk.bgRed('Фамилия: ' + result.Фамилия));
    console.log(chalk.bgRed('Отчество: ' + result.Отчество)); 
  });
};

module.export = hello();