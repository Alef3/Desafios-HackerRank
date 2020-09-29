function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var quantidadeDeMacas = 0;
    var quantidadeDeLaranjas = 0;
    
    //Corrigido!
    for (let i = 0; i < b; i++) {

        //verifica se as maçãs e laranjas cairão na casa do Sam
        if (apples[i] + a >= s && apples[i] + a <= t) quantidadeDeMacas++;
        
        if (oranges[i] + b >= s && oranges[i] + b <= t) quantidadeDeLaranjas++;

    }
    
    console.log(quantidadeDeMacas);
    console.log(quantidadeDeLaranjas);

}
