var loginButton = document.getElementsByName("submit_button");
var login = document.getElementById("Login");
var password = document.getElementById("Password");
var uestring;
var uE = false;
var uestringone;

function fetch_params(url, params) {
	url = new URL(url);
	url.search = new URLSearchParams(params);
	return fetch(url);
}

function myFunction() {
	uestring = uE;

	fetch_params(window.location.href, "/login", {
		"name": login.value,
		"password": password.value,
		"Userexsists": uestring
	}).then(function (res) {
		console.log(res);
		return res.text();
	}).then(function (the_result) {
		alert(the_result);
		console.log(the_result);
		uestringone = the_result;
		console.log(uestringone);

	}).catch(function (e) {
		console.log(e);
	});

	if (uestringone == "true") {
		console.log("User has entered username correctly");
		console.log(location.href);
		location.href = "https://chatterdummy-site.bluestar3211231.repl.co/home.html";
		console.log(location.href);
		return false;
	} else {
		console.log("Incorrect");

	}
}

/*
  var loginButton = document.getElementsByName("submit_button")
  var login = document.getElementById("Login")
  var password = document.getElementById("Password")
  //block_1//
  
  fetch('')
 var loginData = [
   
   ["Bluestar3211231", "133703Ig"], ["xXDarknessPooperXx", "xXDarknessPooperXx"]
   ]
 login.value = loginData[0][0]
 function myFunction(){
    if(login.value == loginData[0][0] && password.value == loginData[0][1] || login.value == loginData[1][0] && password.value == loginData[1][1]){
      console.log("User has entered username correctly")
      console.log(location.href)
      location.href = "https://chatterdummy-site.bluestar3211231.repl.co/home.html"
      console.log(location.href)
      return false;
    } else {
      console.log("Incorrect")
      
    }
  }*/