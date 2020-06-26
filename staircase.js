<script>
'use strict'
<!--12345# -->
<!--1234## -->
<!--123### -->
<!--12#### -->
<!--1##### -->
<!--###### -->
let n = 6; let j = 0;
for(let i = 1; i <= n; i++){
	for(j = i; j < n; j++){
    	document.write('-')
    }
    for(let k = 0; k < i; k++){
    	document.write('#')
	}
    	if(j == n){
    		document.write('<br>')
    	}
}


</script>