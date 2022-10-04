
let sumHome = 0;
let sumGuest = 0;
let homeSumEl = document.getElementById("homeSum-el")
let guestSumEl = document.getElementById("guestSum-el")
let messageEl = document.getElementById("message-el")


function addOneHome() {
    sumHome = sumHome + 1
    homeSumEl.textContent =   sumHome
}

function addTwoHome() {
    sumHome = sumHome + 2
    homeSumEl.textContent =   sumHome
}

function addThreeHome() {
    sumHome = sumHome + 3
    homeSumEl.textContent =   sumHome
}


function addOneGuest() {
    sumGuest = sumGuest + 1
    guestSumEl.textContent =  sumGuest
}

function addTwoGuest() {
    sumGuest = sumGuest + 2
    guestSumEl.textContent =  sumGuest
}

function addThreeGuest() {
    sumGuest = sumGuest + 3
    guestSumEl.textContent =  sumGuest
}

function winningMessage() {
    if (sumHome > sumGuest) {
        message = "Home is winning!"
    }
    else if (sumHome < sumGuest){
        message = "Guest is winning!"
    }
    else {
        message = "It's a tie!"
    }
    messageEl.textContent = message
}

function resetPoints() {
    sumHome = 0
    sumGuest = 0
    message = ""
    homeSumEl.textContent = sumHome
    guestSumEl.textContent = sumGuest
    messageEl.textContent = message
}