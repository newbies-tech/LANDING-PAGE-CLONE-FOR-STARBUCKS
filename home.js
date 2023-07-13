let thumb1 = document.querySelector(".thumb1");
let thumb2 = document.querySelector(".thumb2");
let thumb3 = document.querySelector(".thumb3");
let option=document.querySelector('.options');
let nav=document.querySelector('.nav-options')
let cross=document.querySelector('.close');

option.addEventListener('click', (e)=>{
    option.classList.toggle('active');
    nav.classList.toggle('active');
    cross.classList.toggle('active')



})

thumb1.addEventListener('click',(e)=>{
    let current=document.querySelector(".current")
    current.src="img1.png"
    let quadrant=document.querySelector(".quadrant")
   quadrant.id="green";



});
thumb2.addEventListener('click',(e)=>{
    let current=document.querySelector(".current")
    current.src="img2.png"
    let quadrant=document.querySelector(".quadrant")
   quadrant.id="pink";

});
thumb3.addEventListener('click',(e)=>{
    let current=document.querySelector(".current")
    current.src="img3.png"
    let quadrant=document.querySelector(".quadrant")
   quadrant.id="darkpink";

})
