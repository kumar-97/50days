const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel)=>{

    console.log("in for loop",panel);
    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active');
    })

})
function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}