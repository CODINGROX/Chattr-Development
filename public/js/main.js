var chat_head = document.getElementById("chat-head");
var chat = document.getElementById("chat");
var open = false;

function home(){
  location.href = '/home';
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