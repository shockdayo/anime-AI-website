const questions = [

{
question:"Who is Naruto's father?",
answers:["Minato","Jiraiya"],
correct:0
}

]

let current = 0

document.getElementById("question").innerText =
questions[current].question

function answer(choice){

if(choice === questions[current].correct){

alert("Correct")

}
else{

alert("Wrong")

}

}