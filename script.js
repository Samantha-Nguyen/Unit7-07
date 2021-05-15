// connects the "Multiply" button to the multiply function
document.getElementById('multiply').addEventListener('click', multiply)

// declares variables and sets them to 0
let one = 0
let two = 0
let counter = 0
let answer = 0
let negative = false

function multiply () {
  // takes input from user and gives the variables a value
  one = document.getElementById('one').value
  two = document.getElementById('two').value
  one = parseInt(one)
  two = parseInt(two)
  negative = false

  // does all the math for both positive and negative numbers
  if (one < 0) {
    negative = !negative
    one = Math.abs(one)
  }
  if (two < 0) {
    negative = !negative
    two = Math.abs(two)
  }

  for (counter = 0; counter < one; counter++) {
    answer = answer + two
  }

  if (negative) {
    answer = 0 - answer
  }
  // displays answer on webpage under the textboxes
  document.getElementById('answer').innerHTML = answer
}
