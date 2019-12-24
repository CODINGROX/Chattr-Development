var team = document.getElementById("desc1");
var careers = document.getElementById("desc2");
var goal = document.getElementById("title3");
var contact = document.getElementById("desc4");
var career_title = document.getElementById("career_title");
var career_title1 = document.getElementById("career_title1");


function scrollTeam(){
  team.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollCareers(){
  careers.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollGoal(){
  goal.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollContact(){
  contact.scrollIntoView({behavior: 'smooth', block: 'center'});
}

//Animation loop//

// function playAnimation1(){
//   let pos = 0;
//   while(pos<=100){
//     delay;
//     pos++
//     career_title.style.left = pos + 'px';
//   }
// }

career_title.style.animation = "animct 1s normal";
setInterval(100);
career_title1.style.animation = "animct1 1s normal";

function apply(){
  location.href = "/apply";
}