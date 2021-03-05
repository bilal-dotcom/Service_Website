// const headerSlide = () => {
//   const burger = document.querySelector('.burger');
//   const header = document.querySelector('.header-list')

  
//   burger.addEventListener('click', ()=> {
 
//     console.log("sd");
//   });

// };

// headerSlide();
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}