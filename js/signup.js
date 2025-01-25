var nameInput = document.getElementById("floatingInput");
var emailInput = document.getElementById("floatingEmail");
var passwordInput = document.getElementById("floatingPassword");

if (localStorage.getItem("users") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("users"));
}

function validateSignUp() {
  var name = nameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;

  var nameRegex = /^[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!nameRegex.test(name)) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Invalid name.</span>'
    return;
  }

  if (!emailRegex.test(email)) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Invalid email format.</span>'
    return;
  }

  if (passwordRegex.test(password) === false) {
    document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Password must be at least 8 characters long and contain both letters and numbers.</span>'

    return;
  }

  for (var i = 0; i < userData.length; i++) {
    if (userData[i].userEmail === email) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">Email is already used.</span>'
      return;
    }
  }
  var user = {
    userName: name,
    userEmail: email,
    userPassword: password,
  };

  userData.push(user);
  localStorage.setItem("users", JSON.stringify(userData));
  alert("Signup successful!");
  document.getElementById('exist').innerHTML = '<span class="text-success m-3">Signup successful!</span>'
  window.location.href = "index.html";
}

