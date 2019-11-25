let loginValue = document.getElementById("Login")

function createCookies(){
  document.cookie = "username=" + loginValue.value + ";" + "expires=Thu, 18 Dec 2020 12:00:00 UTC"
}