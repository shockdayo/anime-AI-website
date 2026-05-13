async function loadAnime(){

let response = await fetch(
"https://api.jikan.moe/v4/seasons/now"
)

let data = await response.json()

let animeList = document.getElementById("animeList")

data.data.slice(0,10).forEach(anime => {

animeList.innerHTML +=
"<h3>" + anime.title + "</h3>" +
"<img src='" + anime.images.jpg.image_url + "' width='200'>"

})

}

loadAnime()

animeList.innerHTML +=
"<div style='margin:20px'>" +
"<h3>" + anime.title + "</h3>" +
"<img src='" + anime.images.jpg.image_url + "' width='200'>" +
"</div>"