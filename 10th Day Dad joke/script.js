const jokeEL = document.getElementById('joke');
const btnEl=document.getElementById('jokeBtn');

btnEl.addEventListener('click',generateJoke)
generateJoke();

// using async/await
async function generateJoke(){
    const config={
        headers:{
            'Accept':'application/json'
        },
    }
    const res= await fetch('https://icanhazdadjoke.com/',config);
    const data = await res.json();
    jokeEL.innerHTML = data.joke

}

// using then
// function generateJoke(){
//     const config={
//         headers:{
//             'Accept':'application/json'
//         },
//     }
//     fetch('https://icanhazdadjoke.com/',config)
//     .then((res) => res.json())
//     .then((data) => {
//         jokeEL.innerHTML=data.joke;
//     }
//     )
// }