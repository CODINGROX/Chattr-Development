// var doc = document.getElementsByClassName("app1")[0];
// var origpos = doc.style.top;
// var index = 0
// var i = 0
// var newpos = 0;
// var allcookies = JSON.stringify(document.cookie);
// console.log(allcookies.length)
// var cookies = [

// ]

// getAppReqs(allcookies);

// console.log('cookies array length = ' + cookies.length)

// for(i = 1; i<=cookies.length; i++){
//   let clone = doc.cloneNode(true);
//   newpos = newpos + 12;
//   clone.style.top = newpos + 'vw';
//   document.getElementById('applications_background').appendChild(clone);
// }


// function getCookie(cname) {
//   var name = cname + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i <ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function getAppReqs(allcookies){
//   for(i=0;i<=allcookies.length;i++){
//     var c = allcookies.charAt(i)
//     console.log(c)
//     if(c == 'n' || c == 'N'){
//       if(allcookies.charAt(i+1) == 'u' && allcookies.charAt(i+2) == 'm' && allcookies.charAt(i+3) == 'b'){
//         index = index + 1;
//         console.log(getCookie('Numb' + index))
//         cookies.push('name' + index);
//         console.log('cookie pushed');
//       }
//     }
//   }
// }
