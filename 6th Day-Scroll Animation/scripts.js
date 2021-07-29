const boxes= document.querySelectorAll('.box');
console.log(boxes);
window.addEventListener('scroll',checkBoxes);
checkBoxes();
function checkBoxes(){
    let ht =window.innerHeight/5*4;
    console.log('window ht',ht);
    boxes.forEach(bx => {
        const boxTop= bx.getBoundingClientRect().top;
       if(boxTop<ht){
           bx.classList.add('show')
       }
       else{
           bx.classList.remove('show')
       }
    })
}
