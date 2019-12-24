var slide1 = new slide1();
var listOptions = [ 
  "add-friend",
  "follow",
  "block"
]

function mouseEnter_Leave(elementID, type){
  var element = document.getElementById(elementID);
  element.addEventListener("mouseover", function(){
    slide1.slide1In(event.target.id, type);
  })
  element.addEventListener("mouseout", function(){
    slide1.slide1Out(event.target.id, type);
  })
}

for(l=0;l<listOptions.length;l++){
  mouseEnter_Leave(listOptions[l], "dropdown");
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
      t.style.animation = "tweenin 0.1s normal";
      t.style.left = "0%";
      t.style.width = "1%";
      t.onmouseenter = function(){
        t.style.animation = "tweenin 0.1s normal";
        t.style.left = "0%";
        t.style.width = "1%";
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
      t.style.animation = "tweenout 0.1s normal";
      t.style.left = "0%";
      t.style.width = "0%";
      t.onmouseleave = function(){
        t.style.animation = "tweenout 0.1s normal";
        t.style.left = "0%";
        t.style.width = "0%";
      }
    }
  }
}
