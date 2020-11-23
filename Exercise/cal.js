function allnumeric(pizzano,pizzasize){
  var numbers = /^[0-9]+$/;
  if(pizzano.value.match(numbers)){
    var tot_price=0;
      if  (pizzasize.value=="LG") {
    tot_price = 5 * pizzano.value
    }
    if  (pizzasize.value=="XL") {
    tot_price = 7 * pizzano.value
    }
    if  (pizzasize.value=="SU") {
    tot_price = 17 * pizzano.value;
    alert("Warning : Supersize selected");
    }
let tot_amount = document.getElementById('tot_amount');
tot_amount.value = tot_price;
    return true;
  }
  else{return false;}
}



function calculateTotal(pizzano,pizzasize,discount) {
  var discount = document.getElementById('discount');
  var tot_price=0;
  const discountValue = 90;

  if (pizzasize=="LA") {
tot_price = 5 * pizzano
}
if  (pizzasize=="XL") {
tot_price = 7 * pizzano 
}
if  (pizzasize=="SU") {
tot_price = 17 * pizzano;
alert("Warning : Supersize selected")
}
if  (pizzasize=="LA" && discount == "extracheese") {
  tot_price = 5 * pizzano / discountValue
  }
  if  (pizzasize=="XL"&& discount == "extracheese") {
  tot_price = 7 * pizzano / discountValue
  if  (pizzasize=="SU"&& discount == "extracheese") {
  tot_price = 17 * pizzano / discountValue;
  alert("Warning : Supersize selected")
  }
  
let tot_anount = document.getElementById('tot_amount');
tot_anount.value = tot_price; 

}}


