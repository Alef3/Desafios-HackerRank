function countApplesAndOranges(s, t, a, b, apples, oranges) {

    var numDeMacas = 0;
    var numDeLaranjas = 0;

    var macas_casa = ''
    var laranjas_casa = ''
    
    //Lento. Otimizar depois.
    for (let i = 0; i < apples.length || i < oranges.length; i++) {
        macas_casa = apples[i] + a
        laranjas_casa = oranges[i] + b
        for (let j = s; j <= t; j++) {
            if (j == macas_casa) {
                numDeMacas++;
            } if (j == laranjas_casa) {
                numDeLaranjas++;
            }

        }

    }
    
    console.log(numDeMacas);
    console.log(numDeLaranjas);
}
