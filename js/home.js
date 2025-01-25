var userName = JSON.parse(localStorage.getItem("loggedInUser"));
console.log(userName);
document.getElementById("userName").innerHTML = userName