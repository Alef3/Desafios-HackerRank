<script>
'use strict';

function migratoryBirds(arr) {
 
    let t1 = 0
    let t2 = 0
    let t3 = 0
    let t4 = 0
    let t5 = 0
	
	//contabiliza frequência de cada tipo de pássaro
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 1)
            t1++
        if(arr[i] == 2)
            t2++
        if(arr[i] == 3)
            t3++
        if(arr[i] == 4)
            t4++
        if(arr[i] == 5)
            t5++

    }
    //criacao de array com a frequência dos pássaros
    let vetor = [t1, t2, t3, t4, t5]
	
	//verifica qual tipo de pássaro é o mais comum	
  let maisComum = 0
	for(let k = 0; k < vetor.length; k++){
        if(maisComum < vetor[k]){
            maisComum = vetor[k]
        }
        
    }
	//se houver(ou não) a mesma qttd de pássaros em grupos diferentes, escolher o de menor id
	let menorid = 0
    for(let j = 0; j <= 4; j++){
		if(maisComum == vetor[j]){
			menorid = j + 1
			break
		}
	}
		

return document.write(menorid)
}
migratoryBirds([1,3,5,5,5,3,1,4,4,4,4,4,1,3,2,3,1])
</script>
