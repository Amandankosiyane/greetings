var counting = document.querySelector('#count');
//var clicks = Number(localStorage.getItem('currentNumberOfGreetings'));
//document.getElementById('count').innerHTML = 'Greeted: ' + clicks;
var namesGreeted = {};
for(var i = 0; i < namesGreeted.length; i++){

}

function showInp() {
  var a = document.getElementById("user_input").value;

        if (document.getElementById('English').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined){
          namesGreeted[a] = 1;

          document.getElementById('toDisplay').innerHTML ="Hello, " + document.getElementById("user_input").value;
          var container = clickCounter();

        } else if(document.getElementById('IsiXhosa').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined){
          namesGreeted[a] = 1;

            var container = clickCounter();

           document.getElementById('toDisplay').innerHTML = "Molo, " + document.getElementById("user_input").value;
         } else if(document.getElementById('Afrikaans').checked === true && a.length > 0 && a !== " " && namesGreeted[a] === undefined){
           namesGreeted[a] = 1;

           var container = clickCounter()

           document.getElementById('toDisplay').innerHTML = "Hallo, " + document.getElementById("user_input").value;

        }
//------------------------------------------------------------------------------------------------------------------------
      else if (document.getElementById('English').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined){


          document.getElementById('toDisplay').innerHTML ="Hello, " + document.getElementById("user_input").value + " Welcome back";


        } else if(document.getElementById('IsiXhosa').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined){




           document.getElementById('toDisplay').innerHTML = "Molo, " + document.getElementById("user_input").value + " Wamkelekile kwakhona";
         } else if(document.getElementById('Afrikaans').checked === true && a.length > 0 && a !== " " && namesGreeted[a] !== undefined){




           document.getElementById('toDisplay').innerHTML = "Hallo, " + document.getElementById("user_input").value + " Welkom terug"
        }



        document.getElementById("user_input").value="";

  }

  function clickCounter() {
      if(typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
              localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
              localStorage.clickcount = 1;
          }
          document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s) in this session.";
      } else {
          document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
  }




  var b = document.getElementById("resetButton");
  b.addEventListener("click", clearReset);

  function clearReset(){
    //alert('well done')
    localStorage.clickcount = 0;
  }


  // add a global variable
//var namesGreeted = {};

//if (namesGreeted[userName] === undefined){
  //  greetingsCounter++;
//} else {
  //namesGreeted[userName] = 0;
//}
//document.getElementById("result").innerHTML = namesGreeted[userName];
//} else {
  //document.getElementById("result").innerHTML = "sorry that name has been greeted before..";
//}
