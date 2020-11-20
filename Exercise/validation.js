const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    // show error
    // add error class
    setErrorFor(username, 'User name cannot be blank');
  } else {
    // add success clss
    setSuccessFor(username);
  }

  if (passwordValue.length < 7 ) {
    // show error
    // add error class
    setErrorFor(password, 'Password must be 7 character');
  } else {
    // add success clss
    setSuccessFor(password);
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
