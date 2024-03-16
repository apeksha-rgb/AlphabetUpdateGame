const alphabets = document.querySelector("#alphabet")
const stopButton = document.querySelector("#stop-btn")
const startButton = document.querySelector("#start-btn")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let interval;

let currentIndex=0;
function updateAlphabet(){
    
    alphabets.innerHTML = `${letters[currentIndex]}`
    currentIndex++;
    if(currentIndex===26){
        currentIndex=0;
    }
    
    
}
function stopInterval(){
    clearInterval(interval)
    stopButton.removeEventListener("click",stopInterval)
    startButton.addEventListener("click",startInterval)
}

function startInterval(){
    interval =setInterval(updateAlphabet,100)
    startButton.removeEventListener("click",startInterval)
    stopButton.addEventListener("click", stopInterval)
}

startButton.addEventListener("click",startInterval)
