var palindrome = function (str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr){
        document.getElementById('p').innerHTML = "'"+str+"'"+" Si es un palindromo";
        
    }else{
        document.getElementById('p').innerHTML = "'"+str+"'"+" No es un palindromo";
    };
    return false;
  }
