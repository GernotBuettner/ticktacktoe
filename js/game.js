
//spieler array dummy
var spielerArray = new Array (2);

for (var i = 0; i < spielerArray.length; i++) {
  spielerArray[i] = new Array (2)
  spielerArray [0] [0] =[]
  spielerArray [0] [1] =[]
}

var punkteSp1 = document.querySelector('.punkte_Sp1');
console.log(punkteSp1);
var counterSp1 = 0;
var counterSp2 = 0;
//koordinaten definition
var coordinates = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]

//felderauswahl
var field = document.querySelectorAll('.box');
var fieldInside = document.querySelector(".inside")
var separate = Array.prototype.slice.call(field, 0);
//start button
var start = document.getElementsByClassName('btn')[0];


function className () {
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++) {
    var className = box[i].className
  }
  return className;
}


// console.log(className());

// function nextTurn () {
//     turn = 1 - turn;
// }

function getPoints(i,turn) {
  var box = separate[i].className;
  if (box == "box") {
    var selection = coordinates[i];
    console.log(turn);
    function playerSelection() {
      console.log("spieler " + turn);
      console.log(typeof(turn));
      console.log(spielerArray [0][turn]);
      spielerArray [0] [turn].push(selection)
      console.log(spielerArray [0] [0] + "array 0");
      console.log(spielerArray [0] [1] + "array 1");


    }
    playerSelection(turn,spielerArray [0] [0], spielerArray [0] [1]);
    turn = 1 - turn;
    console.log(turn + " points set");
    field[i].className = "box_dummy";
    // punkte()
    return turn;

    }

  if (box == "box_dummy") {
    console.log("feld voll");
    return
  }
}

function setup() {
  var turn = 0;
  var beginn = false;
  start.addEventListener("click", function() {
    alert("Spielstart")
  })


  className();
  console.log(className());
  separate.forEach(function(field, i) {
    field.addEventListener("click", function() {
      getPoints(i, turn)

      console.log(turn + " outer");
    })
  })
  console.log(turn);
}

setup();





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
  function zuweisung() {
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
