let cards = document.querySelectorAll('form');
let firstCard = document.querySelector('.firstCard');
let secondCard = document.querySelector('.secondCard');
let thirdCard = document.querySelector('.thirdCard');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector("#confirmPawwsord");
let buttonTwo = document.querySelector('.buttonTwo');
let buttonThree = document.querySelector('.buttonThree');
let laneOne = document.querySelector('.laneOne');
let laneTwo = document.querySelector('.laneTwo');


let next = (type) => {
    if (type === 'first') {
        if (emailValidation(email.value)) {
            if (password.value === confirmPassword.value) {
                if (checkPass(password.value)) {
                    laneOne.classList.remove('topLane');
                    laneOne.classList.add('topLaneGreen');
                    buttonTwo.classList.remove('topButton');
                    buttonTwo.classList.add('topButtonGreen');

                    secondCard.classList = 'secondCard';
                    secondCard.classList.add('nextCard');

                    firstCard.classList.add('fade');
                    firstCard.classList.add('transitionToNone')
                    setTimeout(() => {
                        firstCard.classList = ' ';
                        firstCard.classList.add('firstCard');
                        firstCard.classList.add('none');
                    }, 500)
                }
                else {
                    console.log(`password doesn't satisfy the demands`)
                }
            }
            else {
                console.log(`values from password and confirm password fields doesn't match`)
            }
        }
        else {
            console.log(`wrong email`)
        }
    }
    if (type === 'second') {
        laneTwo.classList.remove('topLane');
        laneTwo.classList.add('topLaneGreen');
        buttonThree.classList.remove('topButton');
        buttonThree.classList.add('topButtonGreen');

        thirdCard.classList = 'thirdCard';
        thirdCard.classList.add('nextCard');

        secondCard.classList = ' ';
        secondCard.classList.add('secondCard');
        secondCard.classList.add('fade');
        secondCard.classList.add('transitionToNone')
        setTimeout(() => {
            secondCard.classList = ' ';
            secondCard.classList.add('secondCard');
            secondCard.classList.add('none');
        }, 500)
    }
}

let previous = (type) => {
    if (type === 'third') {
        laneTwo.classList.add('topLane');
        laneTwo.classList.remove('topLaneGreen');
        buttonThree.classList.add('topButton');
        buttonThree.classList.remove('topButtonGreen');

        secondCard.classList.remove('none');
        secondCard.classList.add('fadeIn');

        thirdCard.classList.add('prevCard');
        setTimeout(() => {
            thirdCard.classList.add('none');
        }, 500)
    }
    if (type === 'second') {
        laneOne.classList.add('topLane');
        laneOne.classList.remove('topLaneGreen');
        buttonTwo.classList.add('topButton');
        buttonTwo.classList.remove('topButtonGreen');

        firstCard.classList.remove('none');
        firstCard.classList.add('fadeIn');

        secondCard.classList.add('prevCard');
        setTimeout(() => {
            secondCard.classList.add('none');
        }, 500)
    }
}

const checkPass = (str) => {
    let points = 0;
    if (str.length >= 8) {
        points++;
    }
    if (str.toUpperCase() != str) {
        points++
    }
    if (str.toLowerCase() != str) {
        points++;
    }
    if (checkIfStrContainsNumber(str)) {
        points++;
    }
    if (points >= 4) {
        return true;
    }
    else {
        return false;
    }
}
const checkIfStrContainsNumber = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            return true
        }
    }
}


const emailValidation = (str) => {
    let dot = str.lastIndexOf('.');
    let aaron = str.indexOf('@');
    if (dot - aaron > 2 && str.length - dot > 2) {
        return true
    }
}

