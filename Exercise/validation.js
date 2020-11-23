const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const pizzano = document.getElementById('pizzano');
const discount = document.getElementById('discount');

form.addEventListener('submit', e => {
	e.preventDefault();
	
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const pizzanoValue =  pizzano.value.trim();
  const discountValue = discount.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'User name cannot be blank');
  } else {
    setSuccessFor(username);
  };

  if (passwordValue.length < 7 ) {
    setErrorFor(password, 'Password must be 7 character');
  } else {
    setSuccessFor(password);
  };

  if (pizzanoValue === '') {
    setErrorFor(pizzano, 'Number cannot be blank');
  } else if (!isNumeric(pizzanoValue)) {
    setErrorFor(pizzano, 'Numeric characters only');
  } else {
    setSuccessFor(pizzano);
  }

  if (discountValue === 'extracheese') {
    setSuccessFor(discount);
  }
}
function setErrorFor(input,message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className =  'form-control success';
}

function isNumeric(pizzano) {
  return /^[0-9]+$/.test(pizzano);
}



