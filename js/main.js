var movingDiv = document.getElementById("moving-div"),
  signUpCap = document.getElementById("cap1"),
  logInCap = document.getElementById("cap2"),
  signUpDiv = document.getElementById("sign-up-div"),
  logInDiv = document.getElementById("log-in-div");

function animation1() {
  movingDiv.style.transition = "0.8s";
  movingDiv.style.left = "46%";
  signUpCap.style.display = "none";
  logInCap.style.display = "block";
  signUpDiv.style.display = "none";
  logInDiv.style.display = "block";
}
function animation2() {
  movingDiv.style.transition = "0.8s";
  movingDiv.style.left = "50px";
  signUpCap.style.display = "block";
  logInCap.style.display = "none";
  signUpDiv.style.display = "block";
  logInDiv.style.display = "none";
}
