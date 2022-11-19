const form = document.querySelector(`.login-form`); I
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;
     if (email.value === "" || password.value === "") {
       alert( `Bci поля повинні бути заповнені`)
     }
   console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
})
