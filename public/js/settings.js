var user = getCookie("username");
var slide1 = new slide1();
document.getElementById("name").innerHTML = user;
var posts_options_listdown = false;
var messaging_options_listdown = false;
var options_background = document.getElementById('options_background');
var main_settings_page = document.getElementById('main_settings_page')
var option1 = document.getElementById('option1');

var list = [
  ["options", "posts-options", false],
  ["messaging-options", "messaging-options-list", false]
]

document.getElementById("option1").onmouseenter = function(){
  slide1.slide1In("option1", "dropdown");
}

document.getElementById("option1").onmouseleave = function(){
  slide1.slide1Out("option1", "dropdown");
}

document.getElementById("option2").onmouseenter = function(){
  slide1.slide1In("option2", "dropdown");
}

document.getElementById("option2").onmouseleave = function(){
  slide1.slide1Out("option2", "dropdown");
}

document.getElementById("option3").onmouseenter = function(){
  slide1.slide1In("option3", "dropdown");
}

document.getElementById("option3").onmouseleave = function(){
  slide1.slide1Out("option3", "dropdown");
}

document.getElementById("option4").onmouseenter = function(){
  slide1.slide1In("option4", "dropdown");
}

document.getElementById("option4").onmouseleave = function(){
  slide1.slide1Out("option4", "dropdown");
}

document.getElementById("option5").onmouseenter = function(){
  slide1.slide1In("option5", "dropdown");
}

document.getElementById("option5").onmouseleave = function(){
  slide1.slide1Out("option5", "dropdown");
}

document.getElementById("option6").onmouseenter = function(){
  slide1.slide1In("option6", "dropdown");
}

document.getElementById("option6").onmouseleave = function(){
  slide1.slide1Out("option6", "dropdown");
}


document.getElementById("logout").onmouseenter = function(){
  slide1.slide1In("logout", "dropdown");
}

document.getElementById("logout").onmouseleave = function(){
  slide1.slide1Out("logout", "dropdown");
}

document.getElementById("optionA1").onmouseenter = function(){
  slide1.slide1In("optionA1", "dropdown");
}

document.getElementById("optionA1").onmouseleave = function(){
  slide1.slide1Out("optionA1", "dropdown");
}

document.getElementById("optionA2").onmouseenter = function(){
  slide1.slide1In("optionA2", "dropdown");
}

document.getElementById("optionA2").onmouseleave = function(){
  slide1.slide1Out("optionA2", "dropdown");
}

document.getElementById("optionA3").onmouseenter = function(){
  slide1.slide1In("optionA3", "dropdown");
}

document.getElementById("optionA3").onmouseleave = function(){
  slide1.slide1Out("optionA3", "dropdown");
}

document.getElementById("optionA4").onmouseenter = function(){
  slide1.slide1In("optionA4", "dropdown");
}

document.getElementById("optionA4").onmouseleave = function(){
  slide1.slide1Out("optionA4", "dropdown");
}

document.getElementById("optionA5").onmouseenter = function(){
  slide1.slide1In("optionA5", "dropdown");
}

document.getElementById("optionA5").onmouseleave = function(){
  slide1.slide1Out("optionA5", "dropdown");
}

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

function slide1(){
  this.slide1In = function(id, par){
    if(par == "navbar"){
      var t = document.getElementById(id).parentElement.children[1];
      t.style.animation = "slideenter 0.1s normal";
      t.style.height = "8%";
      t.style.bottom = "8%";
      t.onmouseenter = function(){
        t.style.animation = "slideenter 0.1s normal";
        t.style.height = "8%";
        t.style.bottom = "8%";
      }
      t.onclick = function(){
        location.href = t.parentElement.children[0].href
      }
    } else if(par == "dropdown"){
      var t = document.getElementById(id).parentElement.children[0];
      t.style.animation = "slide1in 0.1s normal";
      t.style.left = "0%";
      t.style.width = "2%";
      t.onmouseenter = function(){
        t.style.animation = "slide1in 0.1s normal";
        t.style.left = "0%";
        t.style.width = "2%";
      }
    }
  }
  this.slide1Out = function(id, par){
    if(par == "navbar"){
      var t = document.getElementById(id).parentElement.children[1];
      t.style.animation = "slideleave 0.1s normal";
      t.style.height = "0%";
      t.style.bottom = "0%";
      t.onmouseleave = function(){
        t.style.animation = "slideleave 0.1s normal";
        t.style.height = "0%";
        t.style.bottom = "0%";
      }
    } else if(par == "dropdown"){
      var t = document.getElementById(id).parentElement.children[0];
      t.style.animation = "slide1out 0.1s normal";
      t.style.left = "0%";
      t.style.width = "0%";
      t.onmouseleave = function(){
        t.style.animation = "slide11out 0.1s normal";
        t.style.left = "0%";
        t.style.width = "0%";
      }
    }
  }
}

document.getElementById("x_button").onclick = function(){
  document.getElementById("change_settings").style.height = "0";
  document.getElementById("change_settings").style.visibility = "hidden";
}

document.getElementById("x_button-password").onclick = function(){
  document.getElementById("change_password_popup").style.height = "0";
  document.getElementById("change_password_popup").style.visibility = "hidden";
}

document.getElementById("x_button-email").onclick = function(){
  document.getElementById("change_email_popup").style.height = "0";
  document.getElementById("change_email_popup").style.visibility = "hidden";
}

document.getElementById("change_name").onclick = function(){ 
  document.getElementById("change_settings").style.height = "100%";
  document.getElementById("change_settings").style.visibility = "visible";
  document.getElementById("change_settings_1").parentElement.style.width = "37vw";
  document.getElementById("change_settings_1").parentElement.style.height = "42vh";
  document.getElementById("change_settings_1").parentElement.style.visibility = "visible";
}

document.getElementById("change_password").onclick = function(){ 
  document.getElementById("change_password_popup").style.height = "100%";
  document.getElementById("change_password_popup").style.visibility = "visible";
  document.getElementById("change_settings_2").parentElement.style.width = "37vw";
  document.getElementById("change_settings_2").parentElement.style.height = "42vh";
  document.getElementById("change_settings_2").parentElement.style.visibility = "visible";
}

document.getElementById("change_email").onclick = function(){ 
  document.getElementById("change_email_popup").style.height = "100%";
  document.getElementById("change_email_popup").style.visibility = "visible";
  document.getElementById("change_settings_3").parentElement.style.width = "37vw";
  document.getElementById("change_settings_3").parentElement.style.height = "42vh";
  document.getElementById("change_settings_3").parentElement.style.visibility = "visible";
}

document.getElementById("change_settings_1").onclick = function(){
  confirm_change_open_procedure("confirm_change_background_1");
}

document.getElementById("cancel_button_1").onclick = function(){
  confirm_change_close_procedure("confirm_change_background_1");
}

document.getElementById("change_settings_2").onclick = function(){
  confirm_change_open_procedure("confirm_change_background_2");
}

document.getElementById("cancel_button_2").onclick = function(){
  confirm_change_close_procedure("confirm_change_background_2");
}

document.getElementById("change_settings_3").onclick = function(){
  confirm_change_open_procedure("confirm_change_background_3");
}

document.getElementById("cancel_button_3").onclick = function(){
  confirm_change_close_procedure("confirm_change_background_3");
}


function confirm_change_close_procedure(id){
  document.getElementById(id).style.height = "0vh";
  document.getElementById(id).style.visibility = "hidden";
  document.getElementById(id).parentElement.style.height = "0";
  document.getElementById(id).parentElement.style.visibility = "hidden";
}

function confirm_change_open_procedure(id){
  document.getElementById(id).parentElement.children[0].style.width = "0vw";
  document.getElementById(id).parentElement.children[0].style.height = "0vh";
  document.getElementById(id).style.visibility = "visible";
  document.getElementById(id).style.width = "35vw";
  document.getElementById(id).style.height = "30vh";
}

function addListEventListeners(){
  for(x=0; x<list.length; x++){
    document.getElementById(list[x][0]).addEventListener("click", function(){
      for(y=0;y<list.length;y++){
        if(list[y][0] == this.id && list[y][2]==false){
          openList(list[y][0], list[y][1], "24vh")
          list[y][2] = true;
        } else if(list[y][0] == this.id && list[y][2]==true){
          closeList(list[y][1]);
          list[y][2] = false;
        }
      }
    })
  }
}

addListEventListeners();

function openList(button_id, list_id, listheight){
  close_All_Lists();
  var scrollTop = window.scrollY,
  elementOffset = document.getElementById(button_id).offsetTop,
  distance = (elementOffset - scrollTop + 31);
  document.getElementById(list_id).style.height = listheight;
  document.getElementById(list_id).style.top = distance;
  document.getElementById(list_id).style.right = document.getElementById(button_id).style.right;
  document.getElementById(list_id).style.width = document.getElementById(button_id).style.width;
}

function closeList(list_id){
  document.getElementById(list_id).style.height = "0vh";
  for(v=0;v<list.length;v++){
    if(list[v][1] == list_id && list[v][2]==true){
      list[v][2] = false;
    }
  }
}

function optionChoosen(button_id, button2id, list_id){
  console.log(button_id, button2id, list_id)
  document.getElementById(button_id).innerHTML = document.getElementById(button2id).innerHTML;
  document.getElementById(list_id).style.height = "0vh";
  posts_options_listdown = false;
  for(v=0;v<list.length;v++){
    if(list[v][0] == button_id && list[v][2]==true){
      list[v][2] = false;
    }
  }
}

function close_All_Lists(){
  for(i=0;i<list.length;i++){
    closeList(list[i][1])
  }
}

onclick = function(){
  if(event.target.id!="options"&&event.target.id!="messaging-options"&&event.target.id!="posts-options"&&event.target.id!="messaging_options_list"){
    close_All_Lists();
  }
}

function addEventListeners(button_id, list_id){
  var button = document.getElementById(button_id);
  var list_var = document.getElementById(list_id);
  for(i=0;i<list_var.childElementCount;i++){
    list_var.children[i].addEventListener("click", function(){
      var listItem = document.getElementById(event.target.id);
      document.getElementById(button_id).innerHTML = listItem.innerHTML;
      for(v=0;v<list.length;v++){
        if(list[v][0] == button_id && list[v][2]==true){
          list[v][2] = false;
        }
      }
    })
  }
}

addEventListeners("options", "posts-options");
addEventListeners("messaging-options", "messaging-options-list");