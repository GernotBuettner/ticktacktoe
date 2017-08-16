
//spieler array dummy
var spielerArray = new Array (2);

for (var i = 0; i < spielerArray.length; i++) {
  spielerArray[i] = new Array (2)
  spielerArray [0] [0] =[]
  spielerArray [0] [1] =[]
}


//player points
var pointCounterA = 0;
var pointCounterB = 0;

//playerMarks
var playerMarkA = "X"
var playerMarkB = "O"


//koordinaten definition
var coordinates = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]

//felderauswahl
var field = document.querySelectorAll('.box');
for (var i = 0; i < field.length; i++) {
  console.log(field[i]);
}

var markPosition = document.getElementsByClassName('inside')[0];
var separate = Array.prototype.slice.call(field, 0);
//start button
var start = document.getElementsByClassName('btn')[0];

//pointField
var PointFieldA = document.getElementsByClassName('punkte_Sp1')[0]
PointFieldA.innerHTML = 0;

var PointFieldB = document.getElementsByClassName('punkte_Sp2')[0]
PointFieldB.innerHTML = pointCounterB;


var inputPlayer2 = document.querySelector('.player_input');

var inputComputer = document.querySelector('.computer_input');



function classNaming () {
  var box = document.getElementsByClassName('box');
  for (var i = 0; i < box.length; i++) {
    var className = box[i].className
  }
  return className;
}


function getPoints(box,i,turn) {
  if (box == "box") {

    var selection = coordinates[i];

    function playerSelection() {

      spielerArray [0] [turn].push(selection)
      console.log(spielerArray [0] [0] + "  array 0");
      console.log(spielerArray [0] [1] + "  array 1");
    }

    playerSelection(turn,spielerArray [0] [0], spielerArray [0] [1]);
    markFields(turn,i,playerMarkA)
    field[i].className = "box_dummy";

    }

  if (box == "box_dummy") {
    console.log("feld voll");
  }
}



function markFields(turn,i) {
  if (turn == 0) {
    console.log(field[i].childNodes);
    field[i].childNodes[1].innerHTML = playerMarkA
  }

  if (turn == 1) {
    field[i].childNodes[1].innerHTML = playerMarkB
  }
}


function goal(pointCounterA,pointCounterB) {
  for (var i = 0; i < field.length; i++) {
    console.log(field[i].className);
    var test = field[i].className
    if (field[i].className == field.className) {
      alert("foo")
    }


  }

  if (pointCounterA > 1) {
    alert("Player 1 Win!")
  }

  if (PointFieldB > 1) {
    alert("Player 2 Win!")
  }
}

computer

function computer(turn) {
  if (turn == 1 && inputComputer.checked == true) {
    alert("buhuhu")
  }
}

computer()

//setup
function setup() {

  var turn = 0;

  classNaming();
  computer(turn)
  separate.forEach(function(field, i) {
    field.addEventListener("click", function() {
      var box = separate[i].className;
      console.log(i);
      getPoints(box,i, turn, playerMarkA, playerMarkB);
      points(turn,box);
      goal(pointCounterA,pointCounterB);
      if (box == "box") {
        turn = 1 - turn;
      }
      console.log(turn + " outer");
    })
  })
  console.log(turn);
}



start.addEventListener("click", function() {
  alert("Spielstart")
  setup();
})









//define pointsystem
var horizontal = new Array (3)

for (var i = 0; i < 3; i++) {
  horizontal[i] = new Array (3)
  horizontal [0] [0] = ["A1", "A2", "A3"];
  horizontal [0] [1] = ["B1", "B2", "B3"];
  horizontal [0] [2] = ["C1", "C2", "C3"];
}


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
  diagonal [0] [1] = ["C1", "B2", "A3"]
}

function pointCount(turn) {
  console.log("inside");
  if (turn == 0) {
    alert("Player 1. You made a point")
    pointCounterA += 1;
    PointFieldA.innerHTML = pointCounterA



  }

  if (turn == 1) {
    alert("Player 2. You made a point")
    pointCounterB += 1;
    PointFieldB.innerHTML = pointCounterB
  }
}

//system zum vergleich mit spieler array
function points(turn, box) {

  //horizontal
  if ($(spielerArray [0] [turn]).not(horizontal [0] [0]).length == 0 && $(horizontal [0] [0]).not(spielerArray [0] [turn]).length === 0) {
      console.log("point!");
      pointCount(turn,pointCounterA,pointCounterB);



  }

  if ($(spielerArray [0] [turn]).not(horizontal [0] [1]).length === 0 && $(horizontal [0] [1]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);


  }

  if ($(spielerArray [0] [turn]).not(horizontal [0] [0]).length === 0 && $(horizontal [0] [2]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);

  }

  //vertikal
  if ($(spielerArray [0] [turn]).not(vertikal [0] [0]).length === 0 && $(vertikal [0] [0]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);


  }

  if ($(spielerArray [0] [turn]).not(vertikal [0] [1]).length === 0 && $(vertikal [0] [1]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);

  }

  if ($(spielerArray [0] [turn]).not(vertikal [0] [2]).length === 0 && $(vertikal [0] [2]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);

  }

  //diagonal
  if ($(spielerArray [0] [turn]).not(diagonal [0] [0]).length === 0 && $(diagonal [0] [0]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);

  }

  if ($(spielerArray [0] [turn]).not(diagonal [0] [1]).length === 0 && $(diagonal [0] [1]).not(spielerArray [0] [turn]).length === 0) {
    console.log("point!");
    pointCount(turn,pointCounterA,pointCounterB);

  }
}
