const backgrounds = [
"images/ghibli1.jpg",
"images/ghibli2.jpg",
"images/ghibli3.jpg",
"images/ghibli4.jpg"
]

function changeBackground(){

let random = Math.floor(Math.random()*backgrounds.length)

document.body.style.backgroundImage = "url(" + backgrounds[random] + ")"

}

setInterval(changeBackground, 8000)

async function getAnime(name){

let response = await fetch(
`https://api.jikan.moe/v4/anime?q=${name}`
)

let data = await response.json()

return data.data[0]

}

async function searchAnime(){

let name =
document.getElementById("search").value

let response = await fetch(
"https://api.jikan.moe/v4/anime?q=" + name
)

let data = await response.json()

let anime = data.data[0]

document.getElementById("result").innerHTML =
"<h2>" + anime.title + "</h2>" +
"<p>" + anime.synopsis + "</p>"

}

function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  if (!input) return;

  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<div>User: ${input}</div>`;

  fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  })
    .then(res => res.json())
    .then(data => {
      chatbox.innerHTML += `<div>AI: ${data.reply}</div>`;
    })
    .catch(err => {
      console.error("Fetch error:", err);
      chatbox.innerHTML += `<div>AI failed to respond</div>`;
    });

  document.getElementById("userInput").value = "";
}