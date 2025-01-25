var emailInput = document.getElementById("floatingEmail");
var passwordInput = document.getElementById("floatingPassword");

if (localStorage.getItem("users") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("users"));
}

function validateLoginData() {
  var email = emailInput.value;
  var password = passwordInput.value;
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (email === "" && password === "") {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger m-3">Inputs are Empty</span>';
    return;
  }

  if (emailRegex.test(email) === false) {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger m-3">Invalid email format.</span>';
      return;
  }

  var userFound = false;
  var userName = "";

  for (var i = 0; i < userData.length; i++) {
    if (
      userData[i].userEmail == email &&
      userData[i].userPassword == password
    ) {
      userFound = true;
      userName = userData[i].userName;
      break;
    }
  }

  if (userFound) {
    alert("Login successful!");
    document.getElementById("exist").innerHTML =
      '<span class="text-success m-3">Login successful!</span>';
    localStorage.setItem("loggedInUser", JSON.stringify(userName));
    window.location.href = "home.html";
} else {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger m-3">Invalid email or password.</span>';
}
}