// Complete the staircase function below.
function staircase(n) {
var pedaco = ''

    //variável i => quantidade de cerquilhas +1 é adicionada a cada iteração
    for(var cerquilhas = 1; cerquilhas <= n; cerquilhas++){
    
        //variável espacos => valor de n - cerquilhas (quantidade de espacos a serem preenchidos)
        for(var espacos = cerquilhas; espacos < n; espacos++){pedaco += ' '}
        
        //conta quantas cerquilhas são necessárias
        for(var k = 0; k < cerquilhas; k++){pedaco += '#'}

    console.log(pedaco)
    pedaco = ''
    }

}
