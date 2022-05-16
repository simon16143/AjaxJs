var vowel = function(str){
    var matches = str.match(/[aeiou]/gi);
    var match1 = str.match(/[áéíóú]/gi);
    var count1 = match1 ? match1.length: 0;
    var count = matches ? matches.length: 0;
    var countTotal = count1 + count
    document.getElementById('p').innerHTML = "'"+str+"' contiene "+countTotal+" vocal(es)"
    return false;
};