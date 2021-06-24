const bt =document.querySelector(".btn");
const inpt = document.querySelector(".input");
const srch=document.querySelector(".search");
bt.addEventListener('click',()=>{
   srch.classList.toggle('active');
   inpt.focus();
})
