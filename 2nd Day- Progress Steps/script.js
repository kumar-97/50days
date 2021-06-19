const progress = document.getElementById('progress');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let cuurentActive = 1;
next.addEventListener('click', () => {
    cuurentActive++;

    if (cuurentActive > circle.length) {
        cuurentActive = circle.length;

    }
    update();

})
prev.addEventListener('click', () => {
    cuurentActive--;
    if (cuurentActive < 1) {
        cuurentActive = 1;
    }
    update();
})

function update() {
    console.log('in update', cuurentActive)
    console.log("in upadte ", circle);
    // if (cuurentActive <= circle.length){
    //     circle[cuurentActive - 1].classList.add('active')
    // } or
       
    circle.forEach((crl,idx)=>{
        if(idx<cuurentActive){
            crl.classList.add('active');
        }
        else
        crl.classList.remove('active');
    })

    const actives =document.querySelectorAll('.active');
    console.log('active and circle',actives.length/circle.length);
    progress.style.width=(actives.length -1)/(circle.length-1)*100 +'%';
    console.log('before if',cuurentActive,circle.length);
    if(cuurentActive === 1) {
        prev.disabled = true
    } else if (cuurentActive === circle.length) {
        
        // console.log('in else',cuurentActive);
        // next.disabled = true;
        next.classList.add('disabled');
        next.style.backgroundColor="grey";

    } else {
        prev.disabled = false
        next.classList.remove('disabled')
        next.style.backgroundColor='blue'
    }

}