// Your code here
var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
//    debugger
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

  //________________________________________________________________________________________
  function moveDodgerRight() {
    var rightNumbers = dodger.style.left.replace("px", "");
    var right = parseInt(rightNumbers, 10);
//    debugger
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });