let fruits = ["apple", "banana", "orange"];


function addGrape(fruits){

    fruits.push("grape");

}


addGrape(fruits);

console.log(fruits);

let age = 0;


if (age >= 18){
    console.log("You are an adult");
}else{
    console.log("You are a minor");
}

for(let i = 1; i <= 10; i++){
        console.log(i);
    }

let button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("Button clicked!");
});