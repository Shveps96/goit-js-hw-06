const validInput = document.querySelector('#validation-input');

function validInputBlur() {
    if(validInput.value.length === 6) {
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');
      } else {
        validInput.classList.add('invalid');
        validInput.classList.remove('valid');
      }
    }

    validInput.addEventListener('blur', validInputBlur);
