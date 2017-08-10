//spieler definieren

var spieler = ["Spieler 1", "Spieler 2"]


//spieler array dummy
var spielerArray = [];

var punkteSp1 = document.querySelector('.punkte_Sp1');
console.log(punkteSp1);
punkteSp1.innerHTML = counterSp1;

console.log(typeof(counterSp1));




var counterSp1 = 0;
var counterSp2 = 0;



//koordinaten definition
var coordinates = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]



var turn = 0;
//anzeigen


function zugAnzeige(turn) {
  console.log("im zug");
  if (turn == 0) {
    var human = document.getElementsByClassName('human')
    for (var i = 0; i < human.length; i++) {
      human[i].className = "human_dummy"
      console.log(human[i]+"anzeige");
    }
  }
}

//felderauswahl
var field = document.querySelectorAll('.box');
var fieldInside = document.querySelector(".inside")

var separate = Array.prototype.slice.call(field, 0);

//start button
var start = document.getElementsByClassName('btn')[0];


function spielEnde () {}

// function className (className) {
//   var box = document.getElementsByClassName('box');
//   for (var i = 0; i < box.length; i++) {
//     var className = box[i].className
//   }
//   return className;
// }


// console.log(className());

function naechster (turn, ready) {
    return turn =+ 1;
    return ready = true;
}


//starte spiel
zugAnzeige();

//hauptfunktion
start.addEventListener("click", function() {
  window.alert("start game")
  var _self = this;
  var spielerZug1 = true;


  hauptfunktion();

  if (hauptfunktion(spielerZug1) == false) {
    console.log("hello");
    turn++
  }

  console.log(field);



  function hauptfunktion() {
    console.log(spielerZug1 + "zwischenscope");

    var tester = separate.forEach(function(field, i) {
      spielerAktion()
      console.log(spielerAktion());
      function spielerAktion() {
        field.addEventListener("click", function() {
          // console.log(typeof(test2()));
          // console.log(trigger);
          var box = separate[i].className;
          // console.log(spielerZug1 + "innerscope");
          //erstelle array, feuere funktionen (punkte,)
          if (box == "box") {
            var selection = coordinates[i];
            spielerArray.push(selection);
            console.log(spielerArray);
            field.className = "box_dummy" + " " + "spieler2" ;
            // punkte()

          }

          if (box = "box_dummy") {
            console.log("feld voll");
            return
          }
        })
      }
    })
  }
});



function classTest() {
  if (field.className == "box_dummy" + " " + "spieler2") {
    console.log("hollow world");
  }
}

classTest()










//definiere punktesystem
var horizontal = new Array (3)

for (var i = 0; i < 3; i++) {
  horizontal[i] = new Array (3)
  horizontal [0] [0] = ["A1", "A2", "A3"];
  horizontal [0] [1] = ["B1", "B2", "B3"];
  horizontal [0] [2] = ["C1", "C2", "C3"];
}
// console.log(horizontal[0][0]);
// console.log(typeof(horizontal [0] [0]));
// console.log(spielerArray);


var vertikal = new Array (3)

for (var i = 0; i < 3; i++) {
  vertikal[i] = new Array (3)
  vertikal [0] [0] = ["A1", "B1", "C1"];
  vertikal [0] [1] = ["A2", "B2", "C2"];
  vertikal [0] [2] = ["A3", "B3", "C3"];
}


var diagonal = new Array (2)

for (var i = 0; i < 2; i++) {
  diagonal[i] = new Array (2);
  diagonal [0] [0] = ["A1", "B2", "C3"]
  diagonal [0] [0] = ["C1", "B2", "A3"]
}

//system zum vergleich mit spieler array
function punkte() {
  console.log("punkte");

  console.log(zuweisung());
  function zuweisung(counterSp1, counterSp2) {
    console.log(wertung + "wertung");
    if (turn == 0 && wertung == true) {
      console.log("gewerted");
      return counterSp1 + 1;

    }

    if (turn == 1) {
      return counterSp2 + 1;

    }


var wertung = false;
  //horizontal
  //credit Sudhakar R StackOverflow
  if ($(spielerArray).not(horizontal [0] [0]).length === 0 && $(horizontal [0] [0]).not(spielerArray).length === 0) {
      console.log("point");
      wertung = true;
      zuweisung()

  }

  if ($(spielerArray).not(horizontal [0] [1]).length === 0 && $(horizontal [0] [1]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()

  }

  if ($(spielerArray).not(horizontal [0] [2]).length === 0 && $(horizontal [0] [2]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()
  }

  //vertikal
  if ($(spielerArray).not(vertikal [0] [0]).length === 0 && $(vertikal [0] [0]).not(spielerArray).length === 0) {
      console.log("point");
      zuweisung()

  }

  if ($(spielerArray).not(vertikal [0] [1]).length === 0 && $(vertikal [0] [1]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()
  }

  if ($(spielerArray).not(vertikal [0] [2]).length === 0 && $(vertikal [0] [2]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()
  }

  //diagonal
  if ($(spielerArray).not(diagonal [0] [1]).length === 0 && $(diagonal [0] [1]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()
  }

  if ($(spielerArray).not(diagonal [0] [2]).length === 0 && $(diagonal [0] [2]).not(spielerArray).length === 0) {
    console.log("point");
    zuweisung()
  }


  else {
    console.log("nopoint");
  }

}
}
