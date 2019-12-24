var games = document.getElementById("games-background");
var videos = document.getElementById("videos_background");
var music = document.getElementById("music_background");
var posts = document.getElementById("posts_background");
var creations = document.getElementById("creations_background");
var music_player_title = document.getElementById("music-player-title");
var music_player_play = document.getElementById("music-player-play");
var content_container = document.getElementById("content_container");
var music_player_back = document.getElementById("music-player-back");
var music_player_knob = document.getElementById("music-player-knob");
var minimize = document.getElementById("minimize");
var music_chat_head = document.getElementById("music-chat-head");
var progress = document.getElementById("progress");
var sound_progress = document.getElementById("sound-progress");
var sound_knob = document.getElementById("sound-knob");
var post_seemore_button = document.getElementById("post_seemore_button");
var slide1 = new slide1();
var list = [
  ["game_genres", "posts-options", false],
  ["video_genres", "video-options", false],
  ["music_genres", "music-options", false],
  ["post_genres", "post-options", false],
  ["creations_genres", "creations-options", false]
]
var listOptions = [ 
  "optionA1",
  "optionA2",
  "optionA3",
  "optionA4",
  "optionA5",
  "optionA6",
  "optionA7",
  "optionA8",
  "optionA9",
  "optionB1",
  "optionB2",
  "optionB3",
  "optionB4",
  "optionB5",
  "optionB6",
  "top_button",
  "videos",
  "music",
  "posts",
  "your_creations"
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

function toPage(string) {
  if(string == "games"){
    closePages();
    openPage("games-background");
  } else if(string == "videos") {
    closePages();
    openPage("videos_background");
  } else if(string == "music") {
    closePages();
    openPage("music_background")
  } else if(string == "posts") {
    closePages();
    openPage("posts_background");
  } else if(string == "creations") {
    closePages();
    openPage("creations_background");
  }
}

function closePages() {
  games.style.visibility = "hidden";
  games.style.height = "0" + "vh";
  games.style.margin = "0" + "px";
  videos.style.visibility = "hidden";
  videos.style.height = "0" + "vh";
  videos.style.margin = "0" + "px";
  music.style.visibility = "hidden";
  music.style.height = "0" + "vh";
  music.style.margin = "0" + "px";
  posts.style.visibility = "hidden";
  posts.style.height = "0" + "vh";
  posts.style.margin = "0" + "px";
  creations.style.visibility = "hidden";
  creations.style.height = "0" + "vh";
  creations.style.margin = "0" + "px";
}

function openPage(pageID){
  var page = document.getElementById(pageID);
  page.style.visibility = "visible";
  page.style.height = "82" + "vh";
  page.style.margin = "15" + "px";
  page.style.marginTop = "15" + "vh";
}

function play_musica(id, url) {
  let t = document.getElementById(id).children[0];
  if(t.checked == false){
    pauseAllMusic();
    music_chat_head.style.animation = "animoct 0.5s normal";
    music_chat_head.style.bottom = "-15vh";
    document.getElementById(id).style.width = ".37vw";
    document.getElementById(id).style.height = "4.4vh";
    document.getElementById(id).style.borderWidth = "0px 0.62vw 0px 0.62vw";
    music_player_title.innerHTML = document.getElementById(id).parentElement.parentElement.children[0].children[0].innerHTML;
    music_player_play.style.width = ".37vw";
    music_player_play.style.height = "4.4vh";
    music_player_play.style.borderWidth = "0px 0.62vw 0px 0.62vw";
    music_player_play.children[1].id = id;
    t.checked = true;
    music_player_back.style.animation = "animin 0.5s normal";
    music_player_back.style.bottom = "2vh";
  } else if(t.checked == true){
    pauseAllMusic();
    music_chat_head.style.animation = "animoct 0.5s normal";
    music_chat_head.style.bottom = "-14vh";
    document.getElementById(id).style.width = "0px";
    document.getElementById(id).style.height = "0px";
    document.getElementById(id).style.borderWidth = "2.4vh 0px 2.4vh 1.6vw";
    music_player_play.style.width = "0px";
    music_player_play.style.height = "0px";
    music_player_play.style.borderWidth = "2.4vh 0px 2.4vh 1.6vw";
    t.checked = false;
  }
  
}

function musicPlayerPlayClicked(){
  var id = music_player_play.children[1].id
  let t = document.getElementById(id).children[0];
  if(t.checked == false){
    t.checked = true
    music_player_play.style.width = ".37vw";
    music_player_play.style.height = "4.4vh";
    music_player_play.style.borderWidth = "0px 0.62vw 0px 0.62vw";
    document.getElementById(id).style.width = ".37vw";
    document.getElementById(id).style.height = "4.4vh";
    document.getElementById(id).style.borderWidth = "0px 0.62vw 0px 0.62vw";
    t.checked = true
  } else if(t.checked == true){
    music_player_play.style.width = "0px";
    music_player_play.style.height = "0px";
    music_player_play.style.borderWidth = "2.4vh 0px 2.4vh 1.6vw";
    document.getElementById(id).style.width = "0px";
    document.getElementById(id).style.height = "0px";
    document.getElementById(id).style.borderWidth = "2.4vh 0px 2.4vh 1.6vw";
    t.checked = false;
  }
}

function pauseAllMusic(){
  music_player_back.style.animation = "animct 0.5s normal";
  music_player_back.style.bottom = "-16vh";
  
  for(i=0;i<content_container.childElementCount;i++){
    let t = content_container.children[i].children[1].children[1].children[2];
    let e = t.children[0]
    console.log(t);
    t.style.width = "0px";
    t.style.height = "0px";
    t.style.borderWidth = "2.4vh 0px 2.4vh 1.6vw";
    e.checked = false;
  }
}

function slide2(){
  id = music_player_knob.parentElement.parentElement.parentElement.children[2].children[1].id;
  document.getElementById(id).parentElement.children[5].children[0].children[0].value = music_player_knob.value;
  document.getElementById(id).parentElement.children[5].children[0].children[1].style.width = music_player_knob.value + "%";
}

function track(){
  progress.style.width = music_player_knob.value + "%"
}

music_player_knob.addEventListener("input", function() {
  progress.style.width = music_player_knob.value + "%"
}, false); 


sound_knob.addEventListener("input", function() {
  sound_progress.style.width = sound_knob.value + "%"
}, false);

progress.style.width = music_player_knob.value + "%"
sound_progress.style.width = sound_knob.value + "%"

function size(id){
  if(document.getElementById(id).parentElement.children[2].children[2].checked == false){
    closeAllPosts(id)
    document.getElementById(id).parentElement.parentElement.style.animation = "post_size 0.5s normal";
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.animation = "desc_size 0.5s normal";
    document.getElementById(id).parentElement.parentElement.style.maxHeight = '100' + 'vh';
    document.getElementById(id).parentElement.parentElement.children[0].children[2].children[0].style.overflow = "scroll"
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.maxHeight = '70' + 'vh';
    document.getElementById(id).style.animation = "colora 0.5s normal";
    document.getElementById(id).style.backgroundColor = "rgb(224, 111, 4)"
    document.getElementById(id).innerHTML = "See Less";
    document.getElementById(id).parentElement.children[2].children[2].checked = true;
  } else if(document.getElementById(id).parentElement.children[2].children[2].checked == true){
    closeAllPosts(id);
    document.getElementById(id).parentElement.parentElement.style.animation = "post_size_close 0.5s normal";
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.animation = "desc_size_close 0.5s normal";
    document.getElementById(id).parentElement.parentElement.children[0].children[2].children[0].style.overflow = "hidden"
    document.getElementById(id).parentElement.parentElement.children[0].children[2].children[0].scrollTo(0, 0);
    document.getElementById(id).parentElement.parentElement.style.maxHeight = '45' + 'vh';
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.maxHeight = '20' + 'vh';
    document.getElementById(id).innerHTML = "See More";
    document.getElementById(id).style.animation = "colorb 0.5s normal";
    document.getElementById(id).style.backgroundColor = "rgb(46, 156, 2)" 
    document.getElementById(id).parentElement.children[2].children[2].checked = false
  }
}

function closeAllPosts(){
  for(i=0;i<document.getElementById("content_container_posts").childElementCount;i++){
    id = document.getElementById("content_container_posts").children[i].children[0].children[3].id
    document.getElementById(id).parentElement.parentElement.style.animation = "post_size_close 0.5s normal";
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.animation = "desc_size_close 0.5s normal";
    document.getElementById(id).parentElement.parentElement.style.maxHeight = '45' + 'vh';
    document.getElementById(id).parentElement.parentElement.children[0].children[2].style.maxHeight = '20' + 'vh';
    document.getElementById(id).innerHTML = "See More";
    document.getElementById(id).style.animation = "colorb 0.5s normal";
    document.getElementById(id).style.backgroundColor = "rgb(46, 156, 2)" 
    document.getElementById(id).parentElement.children[2].children[2].checked = false
    document.getElementById(id).parentElement.parentElement.children[0].children[2].children[0].scrollTo(0, 0);
  }
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
  var scrollLeft = document.getElementById(button_id).offsetLeft;
  document.getElementById(list_id).style.top = distance;
  document.getElementById(list_id).style.left = scrollLeft;
  document.getElementById(list_id).style.right = document.getElementById(button_id).style.right;
  document.getElementById(list_id).style.width = document.getElementById(button_id).style.width;
  document.getElementById(list_id).style.visibility = "visible";
}

function closeList(list_id){
  for(v=0;v<list.length;v++){
    if(list[v][1] == list_id && list[v][2]==true){
      list[v][2] = false;
      document.getElementById(list_id).style.visibility = "hidden";
    }
  }
}

function optionChoosen(button_id, button2id, list_id){
  console.log(button_id, button2id, list_id)
  document.getElementById(button_id).innerHTML = document.getElementById(button2id).innerHTML;
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
  if(event.target.id!="game_genres" && event.target.id!="posts-options" && event.target.id!="video_genres" && event.target.id!="video-options" && event.target.id!="music_genres" && event.target.id!="music-options" && event.target.id!="post_genres" && event.target.id!="post-options" && event.target.id!="creations_genres" && event.target.id!="creations-options"){
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
      console.log(event.target.id)
      for(v=0;v<list.length;v++){
        if(list[v][0] == button_id && list[v][2]==true){
          list[v][2] = false;
          document.getElementById(list[v][1]).style.visibility="hidden";
        }
      }
    })
  }
}

for(p=0;p<list.length;p++){
  addEventListeners(list[p][0], list[p][1]);
}