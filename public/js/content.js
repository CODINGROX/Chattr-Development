var games = document.getElementById("games-background");
var videos = document.getElementById("videos_background");
var music = document.getElementById("music_background");

function toPage(string)
{
  if(string == "games")
  {
    closePages();
    games.style.visibility = "visible";
    games.style.height = "82" + "vh";
    games.style.margin = "15" + "px";
    games.style.marginTop = "15" + "vh";
  } else if(string == "videos")
  {
    closePages();
    videos.style.visibility = "visible";
    videos.style.height = "82" + "vh";
    videos.style.margin = "15" + "px";
    videos.style.marginTop = "15" + "vh";
  } else if(string == "music")
  {
    closePages();
    music.style.visibility = "visible";
    music.style.height = "82" + "vh";
    music.style.margin = "15" + "px";
    music.style.marginTop = "15" + "vh";
  }
}

function closePages()
{
  games.style.visibility = "hidden";
  games.style.height = "0" + "vh";
  games.style.margin = "0" + "px";
  videos.style.visibility = "hidden";
  videos.style.height = "0" + "vh";
  videos.style.margin = "0" + "px";
  music.style.visibility = "hidden";
  music.style.height = "0" + "vh";
  music.style.margin = "0" + "px";
}