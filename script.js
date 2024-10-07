
const h1 = document.querySelector(".h1");
const but = document.querySelector(".but");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const spsc = document.querySelector(".spsc");
const spnum = document.querySelector(".spnum");
const spres = document.querySelector(".spres");
const x = document.querySelector(".X");
const div = document.querySelector(".welcome");

let correctColor;
let attempts = 3;
let score = 0; 

x.addEventListener("click", ()=>{
    div.style.display="none"
})

function generateRandomColors() {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return `rgb(${a},${b},${c})`;
}

function collorpatient() {
    correctColor = generateRandomColors();
    h1.innerHTML = correctColor; 
    bagcolorofbox();  
}

function bagcolorofbox() {
    let boxes = [box1, box2, box3, box4];
    let randomIndex = Math.floor(Math.random() * boxes.length);
    for (let i = 0; i < boxes.length; i++) {
        if (i === randomIndex) {
            boxes[i].style.backgroundColor = correctColor;
        } else {
            boxes[i].style.backgroundColor = generateRandomColors();
        }
        boxes[i].onclick = function() {
            if (boxes[i].style.backgroundColor === correctColor) {
                spres.textContent = "Correct!";
                updateScore();
            } else {
                spres.textContent = "Wrong!You must think about uylanish";
                boxes[i].style.backgroundColor = "white";
                boxes[i].style.transition = "0.8s all linear"
                decreaseAttempt();
            }
        };
    }
}
function updateScore() {
    score++;
    spsc.textContent = score;
    resetGame();
}
function decreaseAttempt() {
    attempts--;
    spnum.textContent = attempts;
    if (attempts === 0) {
        spres.textContent = "Game Over!";
        disableBoxes();
    }
}
function disableBoxes() {
    let boxes = [box1, box2, box3, box4];
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents = "none"; 
    }
}
function resetGame() {
    if (attempts > 0) {
        collorpatient();  
    }
}
but.addEventListener("click", () => {
    location.reload();
});
collorpatient();