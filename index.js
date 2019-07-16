// Your code here
const dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const leftDist = parseInt(leftNumbers, 10);
   
    if (leftDist > 0) {
      dodger.style.left = `${leftDist - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "")
    const leftDist = parseInt(leftNumbers, 10)
   
    if (leftDist < 360) {
      dodger.style.left = `${leftDist + 1}px`
    }
  }

//   Why doesn't the below code work?????

//   function moveDodgerRight() {
//       const rightNumbers = dodger.style.right.replace("px", "");
//       const rightDist = parseInt(rightNumbers, 10)

//       if (rightDist > 0) {
//           dodger.style.right = `${rightDist-1}px`
//       }
//   }

