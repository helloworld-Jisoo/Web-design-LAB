
const select = document.querySelector('select');
const number = document.querySelector('.result');

select.addEventListener('change',  sizeValue);
function sizeValue() {
  const choice = select.value;
  if (choice === 'Large') {
    sizeValue = 5.00;
  } else if (choice === 'Extra-large') {
    sizeValue = 7.00;
  } else if (choice === 'Super-Size') {
    sizeValue =17.00;} 
    else (choice === 'none')
  sizeValue = 0.00;
}



/* Try 3
const selectElement = document.querySelector('#size');
const sizeValue = new Array();
size["None"]=0;
size["Large"]=5.00;
size["Extra-large"]=7.00;
size["Super-Size"]=17.00;

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `Your Pizza size is ${event.target.value}`;
});

const input = document.querySelector('#quantity');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

total = sizeValue * updateValue;
console.log(total); */

/* Try 2
const number = document.getElementById('quantity').value;


function getSizaPizzaPrice(){
  let pizzaSizaPrice = 0;
  let form = document.forms["form"];
  let selectedPizzaSize = form.elements["size"];;
  pizzaSizePrice = size[selectedPizzaSize.value];
  return pizzaSizaPrice;
}

function calculateTotal() {
    let pizzaPrice = getSizaPizzaPrice() * number; // not working?
    let total = document.getElementById('totalPrice');
    total.style.display='block';
    total.innerHTML = "Total Price For the  €"+  pizzaPrice;
}
*/

/*let number = document.getElementById('quantity').value;
let size = document.getElementById('size').value;

let Size = new Array();
      pizza_price["None"]=0;
      pizza_price["Large"]=5;
      pizza_price["Extra-large"]=7;
      pizza_price["Super-Size"]=17;

      total = (number * size)
      document.getElementById('total-price').style.innerHTML = total;
      
btn.addEventListener('click', function(){
*/
/* Try 1
function getPizzaNumberPrice(){
  let pizzaNumberPrice = 0;
  const quantity = document.getElementById('quantity');
  const selectedNumber = quantity.getElementById
  pizzaNumberPrice = quantity[selectedNumber.value];
  return pizzaNumberPrice;

}
function getPizzaSizePrice(){
let pizzaSizePrice=0;
const selectedPizza = form.getElementById('size');
pizzaSizePrice = pizza_price[selectedPizza.value];
  return pizzaSizePrice;
}

function calculateTotal() {
  const pizzaPrice = getPizzaSizePrice() * getPizzaNumberPrice();

  let total = document.getElementById('total_value');
  total.style.display='block';
  toaal.innerHTML = "TOTAL PRICE FOR THE PIZZA €"+pizzaPrice;
}*/
