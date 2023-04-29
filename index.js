const {Command} = require("commander");

const programa = new Command();

programa
    .version('1.0.0')
    .description('estimativa do valor de PI pelo Metodo de Monte Carlo');

programa
    .option('-n,--numero <pontos>','define o numero de pontos usados na simulacao (padrao 1000)',parseInt)
    .action();