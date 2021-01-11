// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

// function submitForm() {
//   validateFields()
//   if (!errorMessages.length) {
//       const { email, phone, amount } = getUserDetails()

//       payWithPaystack(email,amount,phone)
//   }
// }

// function getUserDetails() {
//   const name = document.querySelector('.name input').value
//   const phone = document.querySelector('.phone input'). value
//   const email = document.querySelector('.email input'). value
//   const house = document.querySelector('.house input'). value
//   const size = document.querySelector('.size input'). value
//   const amount = document.querySelector('#price').innerText
//   return {name, phone, email, house, size, amount}
// }

// function validateFields() {
//   const {name, phone} = getUserDetails()

//   if (name.length < 3){
//       errorMessages.push('Incomplete name entererd')
//   }
//   if (isNaN(phone)){
//       errorMessages.push('Invalid phone number entered')
//   }

//   if(errorMessages.length) {
//       let el = ''
//       errorMessages.forEach(err => {
//           el += `<p>${err}</p>`
//       })
//       return document.querySelector('.error').innerHTML = el
//   }
// }


// function clearError() {
//   let elements = document.querySelectorAll('.field')
//   elements.forEach(el => {
//       if(errorMessages.length){
//           errorMessages = []
//           document.querySelector('.error').innerHTML = ''
//       }
//   })
// }