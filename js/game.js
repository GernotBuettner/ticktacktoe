
//spieler array
var spielerArray = [[],[]]


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

var markPosition = document.getElementsByClassName('inside')[0];
var separate = Array.prototype.slice.call(field, 0);
//start & reset button
var start = document.getElementsByClassName('btn')[0];
var reset = document.getElementsByClassName('reset')[0];


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
      spielerArray [turn].push(selection)
    }

    playerSelection();
    markFields(turn,i,playerMarkA)
    field[i].className = "box_dummy";

    }
  if (box == "box_dummy") {
  }
}



function markFields(turn,i) {
  if (turn == 0) {
    field[i].childNodes[1].innerHTML = playerMarkA
  }

  if (turn == 1) {
    field[i].childNodes[1].innerHTML = playerMarkB
  }
}


function computerChoose() {

  var loop = true;

  while (loop == true) {
    var computerNumber = Math.floor((Math.random() * 8) + 1)
    computerSelector = coordinates[computerNumber]

    var checkPlayerArray = spielerArray[0].indexOf(computerSelector)
    var checkOwnArray = spielerArray[1].indexOf(computerSelector)


    if (checkPlayerArray > -1 || checkOwnArray > -1) {

      loop = true;
    }

    if (checkPlayerArray === -1 && checkOwnArray === -1) {
      loop = false;

      var collection = [computerNumber,computerSelector];
      return collection;
    }

  }

}

function computerPush(hander) {

  spielerArray[1].push(hander[1])
  field[hander[0]].childNodes[1].innerHTML = playerMarkB;
}



//setup
function setup() {

  var turn = 0;
  classNaming();
  separate.forEach(function(field, i) {
    field.addEventListener("click", function() {
      var box = separate[i].className;
      getPoints(box,i, turn);
      checkWin(turn)

      draw()

      if (box == "box") {
        turn = 1 - turn;
      }

      setTimeout(function() {

        if (turn == 1 && inputComputer.checked == true) {
          var hander = computerChoose()
          computerPush(hander)
          checkWin(turn)
          draw()

          turn = 1 - turn;
        }
      },500)

    })
  })
}


function draw() {
  var full = true;
  for (var i = 0; i < field.length; i++) {
    if (field[i].className == "box") {
      full = false;
    }
  }

  if (full == true) {
    alert("Its a draw")
    cleanUp()
  }

}


function cleanUp(turn) {

  spielerArray [0].length = 0;
  spielerArray [1].length = 0;
  inputComputer.checked = false;

  for (var i = 0; i < field.length; i++) {
    field[i].className = "box"
    field[i].childNodes[1].innerHTML = ""
  }
  turn = 0
}



start.addEventListener("click", function() {

  alert("Spielstart")
  setup();
})

reset.addEventListener("click", function() {
  alert("reset")
  cleanUp()
})






//pointsystem
var winArray =
  [["A1", "A2", "A3"],
  ["B1", "B2", "B3"],
  ["C1", "C2", "C3"],
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
  ["A3", "B3", "C3"],
  ["A1", "B2", "C3"],
  ["C1", "B2", "A3"],]




function pointCount(turn) {

  if (turn == 0) {
    alert("Player 1. You win")
    pointCounterA += 1;
    PointFieldA.innerHTML = pointCounterA

    cleanUp()



  }

  if (turn == 1) {
    alert("Player 2. You win")
    pointCounterB += 1;
    PointFieldB.innerHTML = pointCounterB
  }

  cleanUp()
}




function winingArray(eachArray,counter,win,turn) {
  for (var i = 0; i < spielerArray [turn].length; i++) {

    var checkArray = eachArray.indexOf(spielerArray [turn] [i])

    if (checkArray > -1) {
      counter ++
    }
  }

  if (counter === 3) {
    win = true;

  }
  
  if (win === true) {
    pointCount(turn)
  }
}



function checkWin(turn) {
  var index;
  var win = false;
  var counter = 0;

  if (spielerArray [turn].length === 3 || spielerArray [turn].length > 3) {
    for (var i = 0; i < winArray.length; i++) {
      var eachArray = winArray[i]

      winingArray(eachArray,counter,win,turn)
    }
  }
}
