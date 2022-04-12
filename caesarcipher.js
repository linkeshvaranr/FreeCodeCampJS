 
 function rot(str){
    var arr1 =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    var arr2 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    var encryptStr =[];
    for (let i=0; i<str.length;i++){
        for (let j=0; j<arr1.length;j++){
            
           
            if(str[i]===arr1[j]){
                
                
                encryptStr.push(arr2[j])
                
            }
        }
    }
    
    console.log( encryptStr.join(""));

 }

rot("HI");
    