var tos = document.getElementById("termsOfService");
var privacy_policy = document.getElementById("privacy_policy_page");
var slide1 = new slide5()

document.getElementById("TOS").onmouseenter = function(){
  slide1.slide5In("TOS", "dropdown");
}

document.getElementById("TOS").onmouseleave = function(){
  slide1.slide5out("TOS", "dropdown");
}

document.getElementById("TOS").onclick = function(){
  openPage("termsOfService")
}

document.getElementById("privacy_policy-button").onclick = function(){
  openPage("privacy_policy_page")
}

document.getElementById("privacy_policy-button").onmouseenter = function(){
  slide1.slide5In("privacy_policy-button", "dropdown");
}

document.getElementById("privacy_policy-button").onmouseleave = function(){
  slide1.slide5out("privacy_policy-button", "dropdown");
}

function slide5(){
  this.slide5In = function(id, par){
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
      t.style.animation = "slide5In 0.1s normal";
      t.style.left = "0%";
      t.style.width = "2%";
      t.onmouseenter = function(){
        t.style.animation = "slide5In 0.1s normal";
        t.style.left = "0%";
        t.style.width = "2%";
      }
    }
  }
  this.slide5out = function(id, par){
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
      t.style.animation = "slide5out 0.1s normal";
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

function openPage(page){
  if(page == "termsOfService"){
    document.getElementById("privacy_policy_page").style.height = "0%";
    document.getElementById("termsOfService").style.height = "100%"
    document.getElementById("privacy_policy_page-buttons").style.height = "0%";
    document.getElementById("tos-buttons").style.height = "100%";
    document.getElementById("termsOfService").scrollTo(0, 0);
  } else if(page == "privacy_policy_page"){
    document.getElementById("termsOfService").style.height = "0%";
    document.getElementById("privacy_policy_page").style.height = "100%";
    document.getElementById("privacy_policy_page-buttons").style.height = "100%";
    document.getElementById("tos-buttons").style.height = "0%";
    document.getElementById("privacy_policy_page").scrollTo(0, 0);
  }
}

function scroll(id){
  document.getElementById('termsOfService').scrollTo({top: document.getElementById(id).style.scrollTop, left: 0, behavior: 'smooth'});
}