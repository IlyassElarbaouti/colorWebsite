//to add a color ,add it to the randomColors array
//then increase randomNum(max) by 1 for each color added
//then add your color to css



const header = document.querySelector('#header');
const randomColors = ['red','blue','green','purple', 'yellow']


function randomNum(max){
   return Math.floor(Math.random() * max);
}

window.addEventListener('load',()=>{
    header.classList.add(randomColors[randomNum(5)])
})
