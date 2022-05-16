var vowel = function(str){
    var matches = str.match(/[aeiou]/gi);
    var count1 = matches ? matches.length: 0;
    document.getElementById('p').innerHTML = "'"+str+"' contiene "+count1+" vocal(es)"
    return false;
};