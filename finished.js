async function loadFinished(){

let response = await fetch(
"https://api.jikan.moe/v4/anime?status=complete"
)

let data = await response.json()

let animeList = document.getElementById("animeList")

data.data.slice(0,10).forEach(anime => {

animeList.innerHTML +=
"<div style='margin:20px'>" +
"<h3>" + anime.title + "</h3>" +
"<img src='" + anime.images.jpg.image_url + "' width='200'>" +
"<p>" + anime.synopsis + "</p>" +
"</div>"

})

}

loadFinished()