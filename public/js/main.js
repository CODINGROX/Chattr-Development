var chat_head = document.getElementById("chat-head");
var chat = document.getElementById("chat");
var music_chat_head = document.getElementById("music-chat");
var minimize = document.getElementById("minimize");
var open = false;
var profile_button = document.getElementById("profile_button");
var content_button = document.getElementById("content_button");
var create_button = document.getElementById("create_button");
var friends_button = document.getElementById("friends_button");
var text = document.getElementById("chat-box");
var debounce = false;
var slide = new slide();
var listOptions = [ 
  "profile_button",
  "content_button",
  "friends_button",
  "create_button",
]
var list1Options = [
  "settings",
  "purchase",
  "lgout"
]

function mouseEnter_Leave(elementID, type){
  var element = document.getElementById(elementID);
  element.addEventListener("mouseover", function(){
    slide.slideIn(event.target.id, type);
  })
  element.addEventListener("mouseout", function(){
    slide.slideOut(event.target.id, type);
  })
}

for(l=0;l<listOptions.length;l++){
  mouseEnter_Leave(listOptions[l], "navbar");
}

for(k=0;k<list1Options.length;k++){
  mouseEnter_Leave(list1Options[k], "dropdown");
  console.log("Event added to : " + list1Options[k] + "!")
}

function home(){
  location.href = '/home';
}

function logOut(){
  document.cookie = "username=nil";
  document.cookie = "session=nil";
  location.href="/";
}

function chat_headclicked(){
  if(open==true){
    chat.style.height = "6" + "%";
    open = false;
  } else if(open==false){
    chat.style.height = "45" + "%";
    open = true;
  }
}

function music_headclicked(){
  music_chat_head.style.animation = "animoct 0.5s normal";
  music_chat_head.style.bottom = "-16vh";
  music_chat_head.style.visibility = "visible";
  minimize.parentElement.parentElement.parentElement.style.animation = "animin 0.5s normal";
  minimize.parentElement.parentElement.parentElement.style.bottom = "2vh";
}

function minimizeBlock(){
  minimize.parentElement.parentElement.parentElement.style.animation = "animct 0.5s normal";
  minimize.parentElement.parentElement.parentElement.style.bottom = "-16vh";
  music_chat_head.style.visibility = "visible";
  music_chat_head.style.animation = "animoin 0.5s normal";
  music_chat_head.style.bottom = "0vh";
}

function altDropdown(id){
  var dropdiv = createElement("div");
  dropdiv.id = "dropdiv";
  document.getElementById(id).appendChild(dropdiv);
}

document.getElementById("optns").onclick = function(){
  if(debounce==false){
    var t = document.getElementById("dropdown-background");
    t.style.animation = "anmin 0.1s normal";
    t.style.top = "12vh";
    debounce=true;
  } else if(debounce==true){
    var t = document.getElementById("dropdown-background");
    t.style.animation = "anmout 0.1s normal";
    t.style.top = "-30vh";
    debounce=false;
  }
}

onmousedown = function(){
  if(event.target.id != "optns" && event.target.id != "settings" && event.target.id != "purchase" && event.target.id != "logout" && debounce == true){
    var t = document.getElementById("dropdown-background");
    t.style.animation = "anmout 0.1s normal";
    t.style.top = "-30vh";
    debounce=false;
  }
}

function slide(){
  this.slideIn = function(id, par){
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
        location.href = t.parentElement.children[0].href;
      }
    } else if(par == "dropdown"){
      var t = document.getElementById(id).parentElement.children[0];
      t.style.animation = "slide0in 0.1s normal";
      t.style.left = "0%";
      t.style.width = "3%";
      t.onmouseenter = function(){
        t.style.animation = "slide0in 0.1s normal";
        t.style.left = "0%";
        t.style.width = "3%";
      }
      t.onclick = function(){
        location.href = t.parentElement.children[1].href;
      }
    }
  }
  this.slideOut = function(id, par){
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
      t.style.animation = "slide0out 0.1s normal";
      t.style.left = "0%";
      t.style.width = "0%";
      t.onmouseleave = function(){
        t.style.animation = "slide0out 0.1s normal";
        t.style.left = "0%";
        t.style.width = "0%";
      }
    }
  }
}