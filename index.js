const {Command} = require("commander");

const programa = new Command();


function estimarPi(numeroPontos) {
    let pontosDentroCirculo = 0;

    let x = 0;
    let y = 0;
  
    for (let i = 0; i < numeroPontos; i++) {
      // Gerando coordenadas x e y aleatórias entre -1 e 1
       x = Math.random() * 2 - 1;
       y = Math.random() * 2 - 1;
  
      // Verificando se o ponto está dentro do círculo unitário
      if (x * x + y * y <= 1) {
        pontosDentroCirculo++;
      }
    }

    // Calculando a estimativa de Pi
   let estimativaPi = (4 * pontosDentroCirculo) / numeroPontos;
  return estimativaPi;
}

programa
    .version('1.0.0')
    .description('estimativa do valor de PI pelo Metodo de Monte Carlo');

programa
    .option('-n,--numero <pontos>','define o numero de pontos usados na simulacao (padrao 1000)',parseInt)
    .action(()=>{
        let pontos = 1000;

        if( programa.opts().numero==undefined){
            let pi = estimarPi(pontos);
            console.log(`Valor de pi estimado: ${pi} usando ${pontos} pontos`);
        }else{
            pontos = programa.opts().numero;
            let pi = estimarPi(pontos);
            console.log(`Valor de pi estimado: ${pi} usando ${pontos} pontos`);
        }
    });

programa.parse(process.argv);

