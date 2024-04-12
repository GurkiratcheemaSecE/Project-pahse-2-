// Event listener for the sign-in button
document.getElementById('signInBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Example validation: checks if username is 'admin' and password is 'hahahehe'
    if (username === "admin" && password === "hahahehe") {
      localStorage.setItem('isSignedIn', 'true');
      
      //Show a welcome message
      $('#signInModal').modal('hide');
      setTimeout(() => alert('Welcome back!'), 500); 
    } else {
      alert('Incorrect username or password.');
    }
  });
