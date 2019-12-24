let loginValue = document.getElementById("Login");
let registerValue = document.getElementById("Register");

function createCookies(){
  document.cookie = "username=" + loginValue.value + ";" + "expires=Thu, 18 Dec 2020 12:00:00 UTC"
}

function createCookiesforRegistration(){
  document.cookie = "username=" + registerValue.value + ";" + "expires=Thu, 18 Dec 2020 12:00:00 UTC"
}
