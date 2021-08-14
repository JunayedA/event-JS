function makeRed(){
    document.body.style.backgroundColor='red';
}

let blueButton =document.getElementById('blue-button');
// just set name of the function 
blueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor ='blue';
}
//anonymus function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function (){
    document.body.style.backgroundColor='green';
}
// 4th way and common use way
const goldenrodButton= document.getElementById('make-goldenrod-button');
goldenrodButton.addEventListener('click',makeGoldenrod);
function makeGoldenrod(){
    document.body.style.backgroundColor='goldenrod';
}
// 5th way similar way to 4th
const hotPinkButton =document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click',function makePink(){
    document.body.style.backgroundColor='hotpink';
});
//6th way short way similar to 5th
document.getElementById('make-lightblue-button').addEventListener('click',function(){
    document.body.style.backgroundColor='lightblue';
})