var user = getCookie("username");

document.getElementById("name").innerHTML = user;

var options_background = document.getElementById('options_background');
var main_settings_page = document.getElementById('main_settings_page')
var option1 = document.getElementById('option1');

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function logOut(){
  document.cookie = "username=nil"
  document.cookie = "session=nil"
  location.href="/"
}

function openPage(page){
  if(page=='account'){
    closePages();
    main_settings_page.style.visibility = 'visible';
    main_settings_page.style.width = '95' + '%'
  } else if(page=='billing'){
    closePages();
    document.getElementById('billing_and_payments_page').style.visibility = 'visible';
    document.getElementById('billing_and_payments_page').style.width = '95' + '%';
  } else if(page=='privacy'){
    closePages();
    document.getElementById('privacy_page').style.visibility = 'visible';
    document.getElementById('privacy_page').style.width = '95' + '%';
  } else if(page=='security'){
    closePages();
    document.getElementById('security_and_login_page').style.visibility = 'visible';
    document.getElementById('security_and_login_page').style.width = '95' + '%';
  } else if(page=='blocking'){
    closePages();
    document.getElementById('blocking_page').style.visibility = 'visible';
    document.getElementById('blocking_page').style.width = '95' + '%';
  } else if(page=='notifications'){
    closePages();
    document.getElementById('notifications_page').style.visibility = 'visible';
    document.getElementById('notifications_page').style.width = '95' + '%';
  }
}

function closePages(){
  document.getElementById('billing_and_payments_page').style.visibility = 'hidden';
  document.getElementById('billing_and_payments_page').style.width = '0' + '%';
  document.getElementById('privacy_page').style.visibility = 'hidden';
  document.getElementById('privacy_page').style.width = '0' + '%';
  document.getElementById('security_and_login_page').style.visibility = 'hidden';
  document.getElementById('security_and_login_page').style.width = '0' + '%';
  document.getElementById('blocking_page').style.visibility = 'hidden';
  document.getElementById('blocking_page').style.width = '0' + '%';
  document.getElementById('notifications_page').style.visibility = 'hidden';
  document.getElementById('notifications_page').style.width = '0' + '%';
  main_settings_page.style.visibility = 'hidden';
  main_settings_page.style.width = '0' + '%';
}