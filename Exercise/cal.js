function calTotalPrice(){

  console.log("calTotalPrice");

  var pizzaSize = document.getElementById('pizzasize').value;
  var pizzaNo = document.getElementById('pizzano').value;
  var totPrice = 0;
  var numbers = /^[0-9]+$/;

    if(pizzaNo.match(numbers)) {

      if(pizzaSize == "LG") {
          totPrice = 5 * pizzaNo;

      } else if(pizzaSize == "XL") {
          totPrice = 7 * pizzaNo;

      } else if(pizzaSize == "SU") {
          alert("Warning : Supersize selected");
          totPrice = 17 * pizzaNo;
          
      } else {
          return false;
      }
      
  } else {
     return false;
  }
  document.getElementById('tot_amount').value = totPrice;
  return true;
}

function calDiscount() {
  var discount = document.getElementById('discount').value;
  var totPrice = document.getElementById('tot_amount').value;

  if (totPrice > 0 && discount == "extracheese") {
     document.getElementById('tot_amount').value = totPrice * 0.9;
  } else {
     return false;
  }
}

function calTotal() {
   calTotalPrice();
  calDiscount();
}