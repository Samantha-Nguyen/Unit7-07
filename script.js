//connects the "Multiply" button to the multiply function
document.getElementById('multiply').addEventListener('click', multiply)

// declares variables and sets them to 0
let one = 0
let two = 0
let counter = 0
let answer = 0

function multiply () {
  // takes input from user and gives the variables a value
  one = document.getElementById('one').value
  two = document.getElementById('two').value
  one = parseInt(one)
  two = parseInt(two)

  for (counter = 0; counter < one; counter++) {
    answer = answer + two
  }
  document.getElementById('answer').innerHTML = answer
}
