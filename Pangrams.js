function pangrams(s) {
var char = "abcdefghijklmnopqrstuvwxyz";
var string = s.toLowerCase()
    
var contaCharIgual = 0;
 
 for(var i = 0; i < char.length; i++){
     for(var j = 0; j < string.length; j++){
         if(char[i] == string[j]){
             contaCharIgual++;
             break;
         }
     }
 }

if(contaCharIgual == char.length) return "pangram"
    else return "not pangram"
    
}
