var user = getCookie("username");

document.getElementById("name").innerHTML = user;

var options_background = document.getElementById('options_background');
var main_settings_page = document.getElementById('main_settings_page');
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

checkScreenSize();

window.onresize = checkScreenSize();

function openPage(page){
  if(page=='account'){
    closePages();
    main_settings_page.style.visibility = 'visible';
  } else if(page=='billing'){
    closePages();
    document.getElementById('billing_and_payments_page').style.visibility = 'visible';
  } else if(page=='privacy'){
  closePages();
  document.getElementById('privacy_page').style.visibility = 'visible';
  } else if(page=='security'){
  closePages();
  document.getElementById('security_and_login_page').style.visibility = 'visible';
  } else if(page=='blocking'){
  closePages();
  document.getElementById('blocking_page').style.visibility = 'visible';
  } else if(page=='groups'){
  closePages();
  document.getElementById('groups_page').style.visibility = 'visible';
  } else if(page=='content'){
  closePages();
  document.getElementById('content_type_page').style.visibility = 'visible';
  } else if(page=='notifications'){
  closePages();
  document.getElementById('notifications_page').style.visibility = 'visible';
  }
}

function closePages(){
  document.getElementById('billing_and_payments_page').style.visibility = 'hidden';
  document.getElementById('privacy_page').style.visibility = 'hidden';
  document.getElementById('security_and_login_page').style.visibility = 'hidden';
  document.getElementById('blocking_page').style.visibility = 'hidden';
  document.getElementById('groups_page').style.visibility = 'hidden';
  document.getElementById('content_type_page').style.visibility = 'hidden';
  document.getElementById('notifications_page').style.visibility = 'hidden';
  main_settings_page.style.visibility = 'hidden';
}

/*
function checkScreenSize(){
  if(screen.width<='480'){
    main_settings_page.style.visibility = 'hidden';
    options_background.style.width = '96' + '%';
    options_background.style.left = '2' + '%';
    options_background.style.fontSize = '3';
    for(i = 1; i<=10; i++){
      document.getElementById('option' + i).style.fontSize = '3' + 'vw';
    }

  }
}

function option1Clicked(){
  if(screen.width<='480'){
    options_background.style.visibility = 'hidden';
    main_settings_page.style.width = '96' + '%';
    main_settings_page.style.left = '2' + '%';
    main_settings_page.style.visibility = 'visible'
    main_settings_page.style.borderRadius = '25' + 'px'
    document.getElementById("profile_Customization_Page").style.height = '40' + '%';
    document.getElementById("profile_Customization_Page").style.fontSize = '3' + 'vw';
    document.getElementById("profile_Customization_Page").style.borderRadius = '25' + 'px';
    document.getElementById("password_value").style.left = '28' + '%';
    document.getElementById("language_value").style.left = '28' + '%';
    document.getElementById("customize_profile").style.height = '50' + '%';
    document.getElementById("customize_profile").style.top = '45' + '%';
    document.getElementById("customize_profile").style.fontSize = '3' + 'vw';
    document.getElementById("customize_profile").style.borderRadius = '25' + 'px';
    document.getElementById("pf_picture").style.top = '60' + '%'
    document.getElementById("picture").style.top = '80' + '%';
    document.getElementById("bio").style.top = '15' + '%';
    document.getElementById("bio_input").style.top = '35' + '%';
    document.getElementById("bio_input").style.fontSize = '3' + 'vw';
    document.getElementById("submitbio").style.top = '45' + '%';
    document.getElementById("submitbio").style.fontSize = '3' + 'vw';
    document.getElementById("submitbio").style.width = '20' + '%';
    document.getElementById("logout").style.width = '20' + '%';
    document.getElementById("logout").style.fontSize = '3' + 'vw';
    document.getElementById('option1').style.fontSize = '3' + 'vw';
  }
}




*/