 let search = document.querySelector('.search-box');
 document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
  //  menu.classList.remove('active');
  
}
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.getElementById("search-box");
});


  let login = document.querySelector('.login-form-container');
 document.querySelector('.btn-login').onclick = () => {
    login.classList.toggle('active');
    
  
}
document.addEventListener("DOMContentLoaded", function () {
  const loginIcon = document.getElementById(".btn-login");
  const loginForm = document.getElementById(".login-form-container")
  debugger;
});
  
  // click event listener to the search icon
  searchIcon.addEventListener("click", function () {
      // Toggle the visibility of the search box
    //  searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
  });

  // to close the search box when scrolling
  window.addEventListener("scroll", function () {
      // Hide the search box when scrolling
      //searchBox.style.display = "none";
  });

let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
//ne rabotayet code
/*
let closeForm = document.querySelector('login-form-container');
document.querySelector('close-button').onclick = () => {
    closeForm.classList.remove('active');
    
}*/

//HIDE Menu and Search Box on Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

//Header
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);    
});


document.addEventListener('DOMContentLoaded', function() {
  debugger;
  // the login button and the login form container
  var loginBtn = document.querySelector('.btn-login');
  var loginFormContainer = document.querySelector('.login-form-container');
  var registrationFormContainer = document.querySelector('.registration-form-container');

  // visibility of the login form container
  function toggleLoginForm() {
    loginFormContainer.classList.toggle('open');
  }

  // visibility of the registration form container
  function toggleRegistrationForm() {
    registrationFormContainer.classList.toggle('open');
  }

  // Attach the toggleLoginForm function to the click event of the login button
  loginBtn.addEventListener('click', toggleLoginForm);
/*
  // close the login form when the close button is clicked
  var closeButton = document.getElementById('close-button');
  if (closeButton) {
    closeButton.addEventListener('click', cancelLoginForm);
  }
*/
  // open the registration form when the "Create One" link is clicked
  var createAccountLink = document.getElementById('createAccountLink');
  if (createAccountLink) {
    createAccountLink.addEventListener('click', function(event) {
      event.preventDefault();
      toggleLoginForm();
      toggleRegistrationForm();
    });
  }

  // close the registration form when the close button is clicked
  var closeRegistrationButton = document.getElementById('close-registration-button');
  if (closeRegistrationButton) {
    closeRegistrationButton.addEventListener('click', toggleRegistrationForm);
  }

  // open the login form when the "Login" link is clicked in the registration form
  var loginLink = document.getElementById('loginLink');
  if (loginLink) {
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      toggleRegistrationForm();
      toggleLoginForm();
    });
  }

  // prevent form submission
  var loginForm = document.getElementById('loginForm');
  var registrationForm = document.getElementById('registrationForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
    });
  }
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
    });
  }
});









// document.addEventListener('DOMContentLoaded', function () {
//   //  the login button and the login form container
//   var loginBtn = document.querySelector('.btn-login');
//   var loginFormContainer = document.querySelector('.login-form-container');

//   // visibility of the login form container
//   function toggleLoginForm() {
//     loginFormContainer.classList.toggle('open');
//   }

//   // Attach the toggleLoginForm function to the click event of the login button
//   loginBtn.addEventListener('click', toggleLoginForm);

//   // close the login form when the close button is clicked
//   var closeButton = document.getElementById('close-button');
//   if (closeButton) {
//     closeButton.addEventListener('click', toggleLoginForm);
//   }
// });


// let menuu = document.querySelector('.navbar');
//  document.querySelector('.bx.bx-menu').onclick = () => {
    
//     menu.classList.toggle('active');
  
// }

// document.addEventListener('DOMContentLoaded', function() {
//   // the login button and the login form container
//   var loginBtn = document.querySelector('.btn-login');
//   var loginFormContainer = document.querySelector('.login-form-container');

//   // visibility of the login form container
//   function toggleLoginForm() {
//     loginFormContainer.classList.toggle('open');
//   }

//   // Attach the toggleLoginForm function to the click event of the login button
//   loginBtn.addEventListener('click', toggleLoginForm);

//   // close the login form when the close button is clicked
//   var closeButton = document.getElementById('close-button');
//   if (closeButton) {
//     closeButton.addEventListener('click', toggleLoginForm);
//   }

//   // prevent form submission
//   var loginForm = document.querySelector('form');
//   if (loginForm) {
//     loginForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       // You can add login logic here if needed
//     });
//   }
// });
