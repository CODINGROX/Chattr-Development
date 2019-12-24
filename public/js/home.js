var user = getCookie("username");
var friends_title = document.getElementById("background_friends_title");
var friends_button_ = document.getElementById("friends_button_");
var friends_title_text_options = [
  'What good is a wolf without a pack?',
  'No friends?',
  `Don't be a loner!`
]

document.getElementById("title").innerHTML = "Welcome, "+ user + "!"

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
var optionChoosen = chooseFriendText(0, friends_title_text_options.length)
friends_title.innerHTML = friends_title_text_options[optionChoosen];

function chooseFriendText(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

positionFriendsButton();
function positionFriendsButton(){
  var friendsTitleLength = friends_title.innerHTML.length;
  console.log(friendsTitleLength);

  if(friendsTitleLength<=15){
    friends_title.style.left = '23' + 'vw'
    friends_title.style.top = '-0.8' + 'vw'
  } else if(friendsTitleLength<=20){
    friends_title.style.left = '21' + 'vw'
    friends_title.style.top = '-0.8' + 'vw'
  } else if(friendsTitleLength>=25){
    friends_title.style.left = '13' + 'vw'
    friends_title.style.top = '-0.8' + 'vw'
  }
  
}
