const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");

function buttonOne() {
    window.location.href = "second.html";

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.setAttribute("class", "right")

    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn1.appendChild(wrong)
    btn1.setAttribute("class", "wrong")
 
}

function buttonTwo() {
    window.location.href = "second.html";

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.setAttribute("class", "right")
}

function buttonThree() {
    window.location.href = "second.html";

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.setAttribute("class", "right")

    
    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn3.appendChild(wrong);
    btn3.setAttribute("class", "wrong")
}

function buttonFour() {
    window.location.href = "second.html";

    let vectorRight = document.createElement("img");
    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.setAttribute("class", "right")

    
    const wrong = document.createElement("img");
    wrong.src = "icons8-multiply-30.png";

    btn4.appendChild(wrong);
    btn4.setAttribute("class", "wrong")
}


function goToNextPage() {
    window.location.href = "result.html";
}

function tryAgain() {
    window.location.href = "next.html";
}