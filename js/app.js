'use strict';
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
        break;
    default:
         // console.log(qu5.toLowerCase());
        alert("please " + userName + " answer with yes OR no only");
        break;
}