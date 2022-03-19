const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");
const btn4 = document.getElementById("four");
const next = document.querySelector(".next");
const reults = document.querySelector(".main2");
const main1 = document.querySelector(".main");

let isOptionSlected = false;

let vectorRight = document.createElement("img");
let wrong = document.createElement("img");

vectorRight.setAttribute("class", "right");
wrong.setAttribute("class", "wrong");



function buttonOne() {
    if (isOptionSlected) {
        return;
    }
    isOptionSlected = true;

    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";

 
    wrong.src = "icons8-multiply-30.png";

    btn1.appendChild(wrong);
    btn1.style.backgroundColor = "#EA8282";

    next.style.display = "unset";
}

function buttonTwo() {
    if (isOptionSlected) {
        return;
    }
    isOptionSlected = true;

    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";
    

    next.style.display = "unset";
}

function buttonThree() {
    if (isOptionSlected) {
        return;
    }
    isOptionSlected = true;

    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";

    wrong.src = "icons8-multiply-30.png";

    btn3.appendChild(wrong);
    btn3.style.backgroundColor = "#EA8282";

    next.style.display = "unset";
}

function buttonFour() {
    if (isOptionSlected) {
        return;
    }
    isOptionSlected = true;

    vectorRight.src = "icons8-done-30.png";

    btn2.appendChild(vectorRight);
    btn2.style.backgroundColor = "#60BF88";

    wrong.src = "icons8-multiply-30.png";

    btn4.appendChild(wrong);
    btn4.style.backgroundColor = "#EA8282";

    next.style.display = "unset";
}

const nextBtn = document.getElementById("btn");
const heading = document.getElementById("heading");
const flag = document.querySelector(".icon");
// const tryAgainBtn = document.querySelector(".btn2");

function goToNextPage() {
    const options = document.querySelectorAll(".option");
    options.forEach(function (option) {
        option.style.backgroundColor = "";
    });
    const icon = document.createElement("img");
    icon.src = "icons8-finland-48.png";
    icon.setAttribute("class", "flag");

    flag.appendChild(icon);

    heading.textContent = "Which country does this flag belong to?";
    heading.style.marginTop = "49px";
    heading.style.paddingTop = "13px";
    heading.setAttribute("class", "head");
    const array = ["A Vitenam", "B Finland", "C Sweden", "D Austria"];

    options.forEach(function (option, index) {
        option.textContent = array[index];
    });

    next.style.display = "none";
    let isOptionSlected = false;

    btn1.addEventListener("click", function () {

        if (isOptionSlected) {
            return;
        }
        isOptionSlected = true;

        vectorRight.src = "icons8-done-30.png";

        btn2.appendChild(vectorRight);
        btn2.style.backgroundColor = "#60BF88";

        wrong.src = "icons8-multiply-30.png";

        btn1.appendChild(wrong);
        btn1.style.backgroundColor = "#EA8282";

        next.style.display = "unset";
    });

    btn2.addEventListener("click", function () {

        if (isOptionSlected) {
            return;
        }
        isOptionSlected = true;

        vectorRight.src = "icons8-done-30.png";

        btn2.appendChild(vectorRight);
        btn2.style.backgroundColor = "#60BF88";

        next.style.display = "unset";
    });

    btn3.addEventListener("click", function () {

        if (isOptionSlected) {
            return;
        }
        isOptionSlected = true;

        vectorRight.src = "icons8-done-30.png";

        btn2.appendChild(vectorRight);
        btn2.style.backgroundColor = "#60BF88";

        wrong.src = "icons8-multiply-30.png";

        btn3.appendChild(wrong);
        btn3.style.backgroundColor = "#EA8282";

        next.style.display = "unset";
    });

    btn4.addEventListener("click", function () {

        if (isOptionSlected) {
            return;
        }
        isOptionSlected = true;

        vectorRight.src = "icons8-done-30.png";

        btn2.appendChild(vectorRight);
        btn2.style.backgroundColor = "#60BF88";

        wrong.src = "icons8-multiply-30.png";

        btn4.appendChild(wrong);
        btn4.style.backgroundColor = "#EA8282";

        next.style.display = "unset";
    });

    nextBtn.addEventListener("click", reultsPage);
}

nextBtn.addEventListener("click", goToNextPage);

function reultsPage() {
    reults.style.display = "unset";

    main1.style.display = "none";
}


const tryAgainBtn = document.querySelector(".btn2")
function tryAgain() {
    
    reults.style.display = "none";

    main1.style.display = "unset";
    main1.style.margin = "auto"

}
tryAgainBtn.addEventListener("click", tryAgain)
