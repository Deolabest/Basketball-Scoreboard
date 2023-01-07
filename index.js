let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeCount = 0
let guestCount = 0

function freeThrowHome() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function twoPointerHome() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function threePointerHome() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function freeThrowGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function twoPointerGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function threePointerGuest() {
    guestCount += 3
    guestScore.textContent = guestCount
}

