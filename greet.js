var counting = document.querySelector('#count');
var clicks = 0;

function showInp() {

  if(document.getElementById('English').checked){
    clicks++;
    counting.innerHTML = clicks;
    document.getElementById('toDisplay').innerHTML ="Hello, " + document.getElementById("user_input").value;
   }
   else if(document.getElementById('IsiXhosa').checked){
     clicks++;
     counting.innerHTML = clicks;
     document.getElementById('toDisplay').innerHTML =
                     "Molo, " + document.getElementById("user_input").value;
   }
   else if(document.getElementById('Afrikaans').checked){
     clicks++;
     counting.innerHTML = clicks;
     document.getElementById('toDisplay').innerHTML =
                    "Hallo, " + document.getElementById("user_input").value;
}
document.getElementById("user_input").value=" ";
}
