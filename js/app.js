'use strict';
let score = 0;
let userName = prompt("What's your name?");
// console.log(userName);
alert("Welcome to our website " + userName + " How about you know me better");

// switch checks the variable with many check cases

let qu1 = prompt("Am I 26 years old?");
switch (qu1.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log(qu1.toLowerCase());
        alert("You are correct " + userName);
        score++;
        break;
    case 'no':
    case 'n':
        // console.log(qu1.toLowerCase());
        alert("You are wrong " + userName);
        break;
    default:
        // console.log(qu1.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu2 = prompt("Am I an Architect?");
switch (qu2.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log(qu2.toLowerCase());
        alert("You are correct " + userName);
        score++;
        break;
    case 'no':
    case 'n':
        // console.log(qu2.toLowerCase());
        alert("You are wrong " + userName);
        break;
    default:
        // console.log(qu2.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu3 = prompt("Do I live in Irbid?");
switch (qu3.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log(qu3.toLowerCase());
        alert("You are wrong " + userName);
        break;
    case 'no':
    case 'n':
        // console.log(qu3.toLowerCase());
        alert("You are correct " + userName);
        score++;
        break;
    default:
        // console.log(qu3.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}
let qu4 = prompt("Did I graduate Architecture from Univerity of Jordan?");
switch (qu4.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log(qu4.toLowerCase());
        alert("You are correct " + userName);
        score++;
        break;
    case 'no':
    case 'n':
        // console.log(qu4.toLowerCase());
        alert("You are wrong " + userName);
        break;
    default:
        // console.log(qu4.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu5 = prompt("I am married, Do I have any children?");
switch (qu5.toLowerCase()) {
    case 'yes':
    case 'y':
        // console.log(qu5.toLowerCase());
        alert("You are wrong " + userName);
        break;
    case 'no':
    case 'n':
        // console.log(qu5.toLowerCase());
        alert("You are correct " + userName);
        score++;
        break;
    default:
        // console.log(qu5.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu6 = prompt("What was my degree out of 100 in highschool?");
if (qu6 == 95) {
    alert("You are correct " + userName);
    score++;
    // console.log(qu6.toLowerCase());
} else {
    for (let i = 0; (i < 4) && (qu6 != 95); i++) {
        qu6 = prompt("Try Again " + userName);
    }
    if (qu6 == 95) {
        alert("You are correct " + userName);
        score++;
        // console.log(qu6.toLowerCase());
    } else {
        prompt("Sorry Your out of attepmts the correct answer is 95%");
        // console.log(qu6.toLowerCase());    
    }
}

// if (visitedCoun.includes(qu7.toLowerCase())) {
//     alert("You are correct " + userName);
//     score++;
//     // console.log(qu7.toLowerCase());
// } else {
//     for (let i = 0; (i < 6) && (!visitedCoun.includes(qu7.toLowerCase())); i++) {
//         qu7 = prompt("Try Again " + userName);
//     }
//     if (visitedCoun.includes(qu7.toLowerCase())) {
//         alert("You are correct " + userName);
//         score++;
//         // console.log(qu7.toLowerCase());
//     } else {
//         prompt("Sorry Your out of attepmts the correct answer is " + visitedCoun);
//         // console.log(qu7.toLowerCase());
//     }

// }

let visitedCoun = ["turkey", "malisia", "egypt", "lebanon"];
let correct = 0;
for (let index = 0; (index < 6); index++) {
    let qu7;
    if (index == 0) {
        qu7 = prompt("Give it a guess, What countries I've been to?");
    } else {
        qu7 = prompt("Try Again " + userName);
    }

    for (let i = 0; i < visitedCoun.length; i++) {
        if (qu7 === visitedCoun[i]) {
            correct = 1;
        }
    }
    if (correct == 1)
        break;

}
if (correct == 1) {
    alert("You are correct " + userName);
    score++;
} else {
    prompt("Sorry Your out of attepmts the correct answer is " + visitedCoun);
}


// console.log(qu7.toLowerCase());

alert("well done your score is " + score + " out of 7");
// console.log(score);
