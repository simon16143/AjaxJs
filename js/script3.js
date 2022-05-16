var vowel = function(str){
    var matches = str.match(/[aeiou]/gi);

    if(matches){
        document.getElementById('p').innerHTML = "Las vocal(es) presente son: "+"'"+matches+"'";

    }
  
    
    return false;
};