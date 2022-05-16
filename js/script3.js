var vowel = function(str){
    var matches = str.match(/[aeiou]/gi);
    var match = str.match(/[áéíóú]/gi);
    if(matches){
        document.getElementById('p').innerHTML = "Las vocal(es) presente son: "+"'"+matches+match+"'";

    }
  
    
    return false;
};