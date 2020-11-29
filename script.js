const btn = document.querySelector(".btn");
const jokes = document.querySelector(".jokes")
btn.addEventListener("click",chuckJoke)

function chuckJoke(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        return response.json();
    })

    .then((data) => {
        var joke = data.value;
        jokes.innerHTML = joke;
    })
    .catch()
}