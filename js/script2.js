function compare(){
   var n1 =  document.getElementById("n1").value;
   var n2 = document.getElementById("n2").value;
   if (n1>n2){
       document.getElementById('p').innerHTML = "'"+n1+"'"+" Es el mayor";
   }
   if (n1 == n2){
       document.getElementById('p').innerHTML = "Ambos valores son iguales";
   }
   if(n1<n2){
       document.getElementById('p').innerHTML = "'"+n2+"'"+" Es el mayor";
   }
}