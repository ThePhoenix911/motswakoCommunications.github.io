"use strict";

// They don't know me SON!!!!!!

let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let dispCol = document.getElementById("column-mobile");

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    // dispCol.style.display = "flex";
    // dispCol.classList.add('dispCol');

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    // dispCol.style.display = "none";
    // dispCol.classList.remove('dispCol');
  }
});





let comingText = document.getElementById("comingText");
let soonText = document.getElementById("soonText");

let contactUS = document.getElementById("contact-us");
let closeX = document.getElementsByClassName("closeX")[0];


function display() {

      // display the 'x' cancel icon
      closeX.style.display = "block";
      // display contact info box 
      contactUS.style.display = "flex";

      closeX.style.transition= "opacity 5s";
      closeX.style.opacity = "1";


      // Add 'active' class to the displayed contact info box to blur it's background
      // let blur = document.getElementsByClassName("blur")[0];
      // blur.classList.toggle('activateFocus');

      // contactUS.classList.toggle('activateFocus');
}




closeX.addEventListener("click", ()=>{
      closeX.style.display = "none";
      contactUS.style.display = "none";
})

window.addEventListener("load", ()=>{
      // console.log("You make me proud son/1");
      comingText.classList.toggle("coming-active");
      soonText.classList.toggle("soon-active");
});


// On hover display contact details relative to the highlighted icon

// let contactIcons = document.querySelectorAll("#contact-us p");

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "index.html", true);
// xhr.onload = ()=>{
//       if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 200){
//                   contactIcons.forEach(e => {
//                         let nestedElem = e.querySelector("#contact-us p i");
//                         e.addEventListener("mouseover", ()=>{
//                               if(nestedElem.className === "fa fa-phone") {
//                                     let phone = document.querySelector("#phone");
//                                     phone.style.display = "inline-block";
//                               }else if(nestedElem.className === "fa fa-envelope") {
//                                     let email = document.querySelector("#email");
//                                     email.style.display = "inline-block";
//                               }else if(nestedElem.className === "fa fa-map-marker") {
//                                     let location = document.querySelector("#location");
//                                     location.style.display = "inline-block";
//                               }
//                         })

//                         e.addEventListener("mouseout", ()=>{
//                               if(nestedElem.className === "fa fa-phone") {
//                                     let phone = document.querySelector("#phone");
//                                     phone.style.display = "none";
//                               }else if(nestedElem.className === "fa fa-envelope") {
//                                     let email = document.querySelector("#email");
//                                     email.style.display = "none";
//                               }else if(nestedElem.className === "fa fa-map-marker") {
//                                     let location = document.querySelector("#location");
//                                     location.style.display = "none";
//                               }
//                         })
//                   });
//             }
//       }
// };
                            
// xhr.send(null);


