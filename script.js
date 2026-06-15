const text = [
"Data Analyst",
"AI-ML Student",
"Python Developer",
"Machine Learning Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = text[i];

if(isDeleting){
document.getElementById("typing").innerHTML =
current.substring(0,j--);
}
else{
document.getElementById("typing").innerHTML =
current.substring(0,j++);
}

if(j === current.length + 1){
isDeleting = true;
}

if(j === 0){
isDeleting = false;
i = (i + 1) % text.length;
}

setTimeout(type,120);
}

type();
