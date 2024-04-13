document.getElementById('submitButton').addEventListener('click', function() {
    var email = document.getElementById('emailInput').value;
    if(validateEmail(email)) {
      alert('Email sent successfully!');
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  