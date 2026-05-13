const quiz = [

{
image:"images/gojo.jpg",
answer:"gojo"
},

{
image:"images/tanjiro.jpg",
answer:"tanjiro"
},

{
image:"images/eren.jpg",
answer:"eren"
}

]

let current = 0

function showImage(){

document.getElementById("quizImage").src =
quiz[current].image

}

function checkAnswer(){

let guess =
document.getElementById("guess").value.toLowerCase()

if(guess === quiz[current].answer){

alert("Correct!")

}

else{

alert("Wrong!")

}

current++

if(current >= quiz.length){

alert("Quiz Finished!")

current = 0

}

showImage()

}

showImage()