// how to get values from HTML? LIKE, WHEN THE SIZE OR NUMBER IS CHANGED, I WANNA GET DATA FROM HTML?
const size = document.querySelector('select'); 
const result = document.querySelector('.result');
const number = document.querySelector('input');

size.onchange = handleChange;
number.onchange = handleChange;

function handleChange(e) { // how to use handleChange?
  parseInt.
  const result = event(size,number);
  console.log(result);
}


function multiply(size, number){
  return size * number;
}

function print(size, number) {
  console.log(`${size} ${number}`);
}

handleChange(multiply);

