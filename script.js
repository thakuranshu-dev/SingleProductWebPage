const layers = document.querySelectorAll(".layer");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

console.log("hello!");

var temp = null
function nextProduct() {
    layers.forEach((layer, index) =>{
        if(layer.classList.contains("show")){
            temp = index;
        }
    })
    layers[temp].classList.remove("show");
    if (temp === layers.length-1) {
        layers[0].classList.add("show");
    }
    else{
        layers[temp+1].classList.add("show");
    }
    temp = null;
}

function prevProduct() {
    layers.forEach((layer, index) =>{
        if(layer.classList.contains("show")){
            temp = index;
        }
    })
    layers[temp].classList.remove("show");
    if (temp === 0) {
        layers[layers.length-1].classList.add("show");
    }
    else{
        layers[temp-1].classList.add("show");
    }
    temp = null;
}

const leftArrow = document.getElementById("leftArrow");
leftArrow.style.rotate = "180deg"
