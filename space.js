const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const next = document.querySelector(".next");
const reults = document.querySelector(".main2");
const main1 = document.querySelector(".main")

function buttonOne() {
    // btn1.setAttribute("class", "wrong");
    // btn2.setAttribute("class", "right")

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";

    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn1.appendChild(wrong);
    btn1.style.backgroundColor = "#EA8282";

    next.style.display = "unset"
 
}

function buttonTwo() {
    // btn2.setAttribute("class", "right");

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";

    next.style.display = "unset"
}

function buttonThree() {
    // btn2.setAttribute("class", "right");
    // btn3.setAttribute("class", "wrong");
    
    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";
    
    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn3.appendChild(wrong);
    btn3.style.backgroundColor = "#EA8282";

    next.style.display = "unset"
}

function buttonFour() {
    // btn2.setAttribute("class", "right");
    // btn4.setAttribute("class", "wrong")
   
    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";
    
    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn4.appendChild(wrong);
    btn4.style.backgroundColor = "#EA8282";

    next.style.display = "unset"

}

const nextBtn = document.getElementById("btn");
const heading = document.getElementById("heading");
const flag = document.querySelector(".icon");
// const tryAgainBtn = document.querySelector(".btn2");


function goToNextPage() {
   const icon = document.createElement("img");
   icon.src = "icons8-finland-48.png";
   icon.setAttribute("class", "flag")

   flag.appendChild(icon);

   heading.textContent = "Which country does this flag belong to?"
   heading.style.marginTop = "49px"
   heading.style.paddingTop = "13px";
   heading.setAttribute("class", "head")

   btn2.textContent = "Finland";

   next.style.display = "none"

   nextBtn.addEventListener("click", reultsPage)
    
}

nextBtn.addEventListener("click", goToNextPage)

function reultsPage() {
  reults.style.display = "unset";

  main1.style.display = "none";

}

// function tryAgain() {
//     main1.style.display = "unset";

//     reults.style.display = "none";
  
// }
// tryAgainBtn.addEventListener("click", tryAgain)