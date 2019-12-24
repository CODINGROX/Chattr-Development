var first_name = document.getElementById("first_name");
var last_name = document.getElementById("last_name");
var email = document.getElementById("email");
var name_error = document.getElementById("name_error");
var lastname_error = document.getElementById("lastname_error");
var email_error = document.getElementById("email_error");
var checkbox = document.getElementById("accept_button");
var errors = [
  'feild cannot remain empty',
  `email must have an '@' sign`
]

function submit_app(){
  var atmissing = false;

  if(first_name.value == '' || last_name.value == '' || email.value == ''){
    if(first_name.value==''){
      first_name.style.borderColor='red';
      name_error.innerHTML = errors[0];
    };
    if(last_name.value==''){
      last_name.style.borderColor='red';
      lastname_error.innerHTML = errors[0];      
    };
    if(email.value==''){
      email.style.borderColor='red';
      email_error.innerHTML = errors[0];
      return;
    };
  }

  for(var i = 0; i<=email.value.length; i++){
    let char = email.value.charAt(i)
    console.log(char);
    if(char == '@'){
      email_error.innerHTML = "";
      return;
    } else if(i == email.value.length && char != '@'){
      email_error.innerHTML = errors[1];
      email.style.borderColor = 'red';
      return
    };
  };

  location.href = "/jobs";
}