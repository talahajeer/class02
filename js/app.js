'use strict';
let userName = prompt("What's your name?");
alert("Welcome to our website " + userName + " How about you know me better");

let qu1 = prompt("Am I 26 years old?");
switch (qu1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("You are correct " + userName);
        break;
    case 'no':
    case 'n':
        alert("You are wrong " + userName);
        break;
    default:
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu2 = prompt("Am I an Architect?");
switch (qu2.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("You are correct " + userName);
        break;
    case 'no':
    case 'n':
        alert("You are wrong " + userName);
        break;
    default:
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu3 = prompt("Do I live in Irbid?");
switch (qu3.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("You are wrong " + userName);
        break;
    case 'no':
    case 'n':
        alert("You are correct " + userName);
        break;
    default:
        alert("please " + userName + " answer with yes OR no only");
        break;
}
let qu4 = prompt("Did I graduate Architecture from Univerity of Jordan?");
switch (qu4.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("You are correct " + userName);
        break;
    case 'no':
    case 'n':
        alert("You are wrong " + userName);
        break;
    default:
        alert("please " + userName + " answer with yes OR no only");
        break;
}

let qu5 = prompt("I am married, Do I have any children?");
switch (qu5.toLowerCase()) {
    case 'yes':
    case 'y':
        alert("You are wrong " + userName);
        break;
    case 'no':
    case 'n':
        alert("You are correct " + userName);
        break;
    default:
        alert("please " + userName + " answer with yes OR no only");
        break;
}