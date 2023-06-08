// Retrieve the input values from the form
const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const submitButton = document.getElementById('submitButton');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function(event) {
  //event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  const name = nameInput.value;
  const password = passwordInput.value;

  // Store the values in local storage
  localStorage.setItem('name', name);
  localStorage.setItem('password', password);

  // Optionally, display a success message or perform any other actions
  console.log('Input values stored in local storage');
});
