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
                    removeClass(laneOne, 'topLane');
                    addClass(laneOne, 'topLaneGreen');
                    removeClass(buttonTwo, 'topButton');
                    addClass(buttonTwo, 'topButtonGreen');

                    setClass(secondCard, 'secondCard');
                    addClass(secondCard, 'nextCard');

                    addClass(firstCard, 'fade');
                    addClass(firstCard, 'transitionToNone')
                    setTimeout(() => {
                        setClass(firstCard, ' ');
                        addClass(firstCard, 'firstCard');
                        addClass(firstCard, 'none');
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
        removeClass(laneTwo, 'topLane');
        addClass(laneTwo, 'topLaneGreen');
        removeClass(buttonThree, 'topButton');
        addClass(buttonThree, 'topButtonGreen');

        setClass(thirdCard, 'thirdCard');
        addClass(thirdCard, 'nextCard');

        setClass(secondCard, ' ');
        addClass(secondCard, 'secondCard');
        addClass(secondCard, 'fade');
        addClass(secondCard, 'transitionToNone')
        setTimeout(() => {
            setClass(secondCard, ' ');
            addClass(secondCard, 'secondCard');
            addClass(secondCard, 'none');
        }, 500)
    }
}

let previous = (type) => {
    if (type === 'third') {
        addClass(laneTwo, 'topLane');
        removeClass(laneTwo, 'topLaneGreen');
        addClass(buttonThree, 'topButton');
        removeClass(buttonThree, 'topButtonGreen');

        removeClass(secondCard, 'none');
        addClass(secondCard, 'fadeIn');

        addClass(thirdCard, 'prevCard');
        setTimeout(() => {
            addClass(thirdCard, 'none');
        }, 500)
    }
    if (type === 'second') {
        addClass(laneOne, 'topLane');
        removeClass(laneOne, 'topLaneGreen');
        addClass(buttonTwo, 'topButton');
        removeClass(buttonTwo, 'topButtonGreen');

        removeClass(firstCard, 'none');
        addClass(firstCard, 'fadeIn');

        addClass(secondCard, 'prevCard');
        setTimeout(() => {
            addClass(secondCard, 'none');
        }, 500)
    }
}

const checkPass = (str) => {
    return str.length >= 8 && str.toUpperCase() !== str && str.toLowerCase() !== str && checkIfStrContainsNumber(str)
}
const checkIfStrContainsNumber = (str) => {
    let arrFromStr = str.split('').find(elem => !isNaN(+elem))
    return arrFromStr
}

const emailValidation = (str) => {
    let dot = str.lastIndexOf('.');
    let aaron = str.indexOf('@');
    if (dot - aaron > 2 && str.length - dot > 2 && aaron > 2) {
        return true
    }
}

const addClass = (node, cssClass) => {
    return node.classList.add(cssClass)
}

const removeClass = (node, cssClass) => {
    return node.classList.remove(cssClass)
}

const setClass = (node, cssClass) => {
    return node.classList = cssClass
}