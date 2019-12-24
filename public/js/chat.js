var slide2 = new slide2();
var selected = false;
var filled = false;
var allowBreaks = false;
var convo = document.getElementById("conversation");
var chat_box = document.getElementById("chat-box");
if(convo){
  convo.scrollTo(0, Math.max(99999^999));
}
var toSlideOut = [
  ['options-button', 'extra-options', false],
  ['chat-search-button', 'search-bar-container', false]
]


function slide2(){
  this.slide2In = function(id, par){
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
      var t = document.getElementById(id).children[0];
      t.style.animation = "slide2in 0.1s normal";
      t.style.left = "0%";
      t.style.width = "1.5%";
      t.onmouseenter = function(){
        t.style.animation = "slide2in 0.1s normal";
        t.style.left = "0%";
        t.style.width = "1.5%";
      }
    }
  }
  this.slide2Out = function(id, par){
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
      var t = document.getElementById(id).children[0];
      t.style.animation = "slide2out 0.1s normal";
      t.style.left = "0%";
      t.style.width = "0%";
      t.onmouseleave = function(){
        t.style.animation = "slide2out 0.1s normal";
        t.style.left = "0%";
        t.style.width = "0%";
      }
    }
  }
}

function sendMessage(content){
  if(selected = true && filled==true){
    var chat_holder = document.createElement("div");
    chat_holder.className = "chat-holder";
    var chat = document.createElement("div");
    chat.className = "chat";
    chat.id = "sender-recipient-id=''";
    chat_holder.appendChild(chat);
    var text = document.createElement("p");
    text.innerHTML = content;
    chat.appendChild(text);
    document.getElementById("conversation").appendChild(chat_holder);
    document.getElementById("chat-box").contentEditable = "true";
    document.getElementById("chat-box").setAttribute("data-text", "Say something..");
    convo.scrollTo(0, Math.max(99999^999));
  }
}

chat_box.onclick = function(){
  selected = true;
}

this.addEventListener('keypress', event => {
  if(event.keyCode == 13) {
    if(selected){
      filled = true;
      var string = chat_box.innerText.toLowerCase();
      if(chat_box.innerText.length > 0 && chat_box.innerHTML != "" && chat_box.innerText.charAt(0) == "a" || chat_box.innerText.charAt(0) == "b" || string.charAt(0) == "c" && string.charAt(0) == "d" || string.charAt(0) == "e" || string.charAt(0) == "f" || string.charAt(0) == "g" || string.charAt(0) == "h" || string.charAt(0) == "i" || string.charAt(0) == "j" || string.charAt(0) == "k" || string.charAt(0) == "l" || string.charAt(0) == "m" || string.charAt(0) == "n" || string.charAt(0) == "o" || string.charAt(0) == "p" || string.charAt(0) == "q" || string.charAt(0) == "r" || string.charAt(0) == "s" || string.charAt(0) == "t" || string.charAt(0) == "u" || string.charAt(0) == "v" || string.charAt(0) == "w" || string.charAt(0) == "x" || string.charAt(0) == "y" || string.charAt(0) == "z"){  
        sendMessage(document.getElementById("chat-box").innerText);
        console.log("Sent");
        document.getElementById("chat-box").innerHTML = "";
        chat_box.innerHTML = chat_box.innerHTML.replace(/((.*?))/g, "");
        allowBreaks=false;
        return true;
      }
    }
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }
  console.log(chat_box.childElementCount);
    for(i=0;i<chat_box.childElementCount;i++){
      if(chat_box.children[i].nodeName == 'BR' && !event.shiftKey && allowBreaks != true){
        chat_box.children[i].remove();
      }
    }
})

onmousedown = function(){
  if(event.target.id != "chat-box"){
    filled = false;
    selected = false;
  }
}

function enterKeyPressHandler(evt) {
  var sel, range, br, addedBr = false;
  evt = evt || window.event;
  var charCode = evt.which || evt.keyCode;
  if (charCode == 13) {
    if (typeof window.getSelection != "undefined") {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        br = document.createElement("br");
        range.insertNode(br);
        range.setEndAfter(br);
        range.setStartAfter(br);
        sel.removeAllRanges();
        sel.addRange(range);
        addedBr = true;
      }
    } else if (typeof document.selection != "undefined") {
      sel = document.selection;
      if (sel.createRange) {
        range = sel.createRange();
        range.pasteHTML("<br>");
        range.select();
        addedBr = true;
      }
    }
    if (addedBr) {
      if (typeof evt.preventDefault != "undefined") {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  }
}

var el = document.getElementById("chat-box");

if (typeof el.addEventListener != "undefined") {
  el.addEventListener("keypress", enterKeyPressHandler, false);
} else if (typeof el.attachEvent != "undefined") {
  el.attachEvent("onkeypress", enterKeyPressHandler);
}

function tweenOptionsIn(id){
  for(i=0;i<toSlideOut.length;i++){
    for(v=0;v<1;v++){
      if(toSlideOut[i][0]!=id && toSlideOut[i][2]==true){
        let idA = document.getElementById(toSlideOut[i][1]);
        idA.style.animation = "optionsout 0.1s normal";
        idA.style.top = "-30" + "vh";
        toSlideOut[i][2]=false;
      } else if(toSlideOut[i][0]!=id && toSlideOut[i][2]==false){
        let idA = document.getElementById(toSlideOut[i][1]);
        idA.style.animation = "optionsout 0.1s normal";
        idA.style.top = "-30" + "vh";
        toSlideOut[i][2]=false;
        console.log(toSlideOut[i][0]);
      } else if(toSlideOut[i][0]==id && toSlideOut[i][2]==false){
        let ui = document.getElementById(toSlideOut[i][1]);
        ui.style.animation = "optionsin 0.1s normal";
        ui.style.top = "24" + "vh";
        toSlideOut[i][2]=true;
        console.log(toSlideOut[i][0]);
      } else if(toSlideOut[i][0]==id && toSlideOut[i][2]==true){
        let idA = document.getElementById(toSlideOut[i][1]);
        idA.style.animation = "optionsout 0.1s normal";
        idA.style.top = "-30" + "vh";
        toSlideOut[i][2]=false;
        console.log(toSlideOut[0][1]);
      }
    }
  }
}