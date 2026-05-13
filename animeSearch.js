async function searchAnime(){

let name =
document.getElementById("searchBox").value

let response = await fetch(
"https://api.jikan.moe/v4/anime?q=" + name
)

let data = await response.json()

let anime = data.data[0]

document.getElementById("result").innerHTML =
"<h2>" + anime.title + "</h2>" +
"<p>" + anime.synopsis + "</p>"

}