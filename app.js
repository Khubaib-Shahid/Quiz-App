let obj = {
    q0: {
        question: "Which one is the capital of Pakistan",
        answer: "Islamabad",
        option: ["Karachi", "Lahore", "Islamabad", "Quetta"]
    },
    q1: {
        question: "how many provinces in Pakistan",
        answer: "4",
        option: ["8", "4", "3", "9"]
    },
    q2: {
        question: "We will _____ to school",
        answer: "going",
        option: ["went", "be going", "goes", "going"]
    },
    q3: {
        question: "Who is the father of Computer",
        answer: "Charles Babbage",
        option: ["Charles Babbage", "Albert Einstien", "Nikol's Tesla", "Rutherford"]
    },
    q4: {
        question: "4 + 3 x 9",
        answer: "31",
        option: ["29", "53", "31", "34"]
    },
    q5: {
        question: "Barking dogs seldom _____",
        answer: "bites",
        option: ["bark", "bites", "roar", "tail"]
    },
    q6: {
        question: "Who is the current Governor Sindh",
        answer: "Kamran Tessori",
        option: ["Kamran Tessori", "Saeed Ghani", "Bilawal Bhutto", "Maryam Nawaz"]
    },
    q7: {
        question: "What is the current matric board of karachi",
        answer: "BSEK",
        option: ["BIEK", "BSEK", "BSEL", "BSEP"]
    },
    q8: {
        question: "Body covers a distance with time with the help of ________",
        answer: "Velocity",
        option: ["Velocity", "Acceleration", "Resistance", "None of These"]
    },
    q9: {
        question: "First Prime Minister of Pakistan",
        answer: "Liaquat Ali Khan",
        option: ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Mualana Ali Jauhar", "Allama Iqbal"]
    },
    q10: {
        question: "First Khaleefa of Islam",
        answer: "Hazrat Abu Bakr Sidique",
        option: ["Hazrat Umar", "Hazrat Usman", "Hazrat Ali", "Hazrat Abu Bakr Sidique"]
    },
    q11: {
        question: "Who is the owner of whatsapp",
        answer: "Mark Zukerburg",
        option: ["Elon Musk", "Stephen Hawkins", "Mark Zukerburg", "Bill Gates"]
    },
    q12: {
        question: "Which one is the World largest peek",
        answer: "Mount Everest",
        option: ["Mount Everest", "K2", "Kangchenjunga", "Himalya"]
    },
    q13: {
        question: "Who is the World Richest Person",
        answer: "Elon Musk",
        option: ["Bill Gates", "Elon Musk", "Mark Zukerburg", "Ambani"]
    },
    q14: {
        question: "4 / (3 + 5)",
        answer: "2",
        option: ["17", "2", "4", "0"]
    },
    q15: {
        question: "Which country has world biggest clock",
        answer: "Saudi Arabia",
        option: ["Saudi Arabia", "Turkey", "China", "Germany"]
    },
    q16: {
        question: "How many bones in human body",
        answer: "206",
        option: ["301", "192", "348", "206"]
    },
    q17: {
        question: "Who is the father of Physics",
        answer: "Isaac Newton",
        option: ["Albert Eienstien", "Isaac Newton", "Al Razi", "Nikolas Tesla"]
    },
    q18: {
        question: "Who invented Phone",
        answer: "Martin Cooper",
        option: ["Nikola Tesla", "Martin Cooper", "Charles Babbage", "Elon Musk"]
    },
    q19: {
        question: "Who is CEO of Tesla",
        answer: "Elon Musk",
        option: ["Nikola Tesla", "Elon Musk", "Mark Zukerberg", "Bill Gates"]
    },
}

let user = Math.floor(Math.random() * 15);
let main = document.querySelector("#main");
let btn = document.querySelector("#btn");
let score = 0;

for (let i = 1; i <= 5; i++) {
    let quser = "q" + user;
    main.innerHTML += `<div class="box"><h4>Q${i}: ${obj[quser].question}?</h4><ul id="${quser}"><li class="done" onclick="ans(this)">${obj[quser].option[0]}</li><li class="done" onclick="ans(this)">${obj[quser].option[1]}</li><li class="done" onclick="ans(this)">${obj[quser].option[2]}</li><li class="done" onclick="ans(this)">${obj[quser].option[3]}</li></ul></div>`;
    user++;
}


function ans(e){
    let id = e.parentNode.getAttribute("id");

    if (e.innerHTML === obj[id].answer) {
        e.style.backgroundColor = "rgb(10, 178, 10)";
        e.style.color = "white";
        e.parentNode.parentNode.setAttribute("id", "check");
        score += 10;
        foo();
    } else {
        e.style.backgroundColor = "red";
        e.style.color = "white";
        e.parentNode.parentNode.setAttribute("id", "check");
        foo();
    }

    for (let i = 0; i <= 3; i++) {
        e.parentNode.childNodes[i].removeAttribute("onclick");
        e.parentNode.childNodes[i].removeAttribute("class");
        e.parentNode.childNodes[i].style.opacity = "0.6";
        e.parentNode.childNodes[i].style.cursor = "not-allowed";
    }
}

function foo() {

let d = document.getElementsByClassName("box");
let flag = 0;
for (var i = 0; i < d.length; i++) {
    if (d[i].hasAttribute("id") === true) {
        flag++;
    }
}

if (flag === 5) {
    btn.removeAttribute("disabled");
    btn.setAttribute("class", "en")
}

}




function submit() {
    let p = document.querySelector(".page");
    let link;
    p.style.display = "flex";
    p.style.flexDirection = "row";
    p.style.justifyContent = "center";
    p.style.alignItems = "center";
    p.style.zIndex = "1";

    if (score >= 30) {
        link = "Images/passed.png";
    } else {
        link = "Images/failed.png";
    }

    p.innerHTML = `<div><a href="index.html"><img class="cross" src="Images/delete-button.png" width="25px" height="25px"></a><h1>Result</h1><h3>Score: ${score}</h3><img src="${link}" width="200px" height="170px"></div>`;
}

// function refresh() {
//     let p = document.querySelector(".page");
//     p.style.display = "none";
// }