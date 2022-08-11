let homeCount = 0;
let guestCount = 0;
let pointsGuest = document.getElementById("scoresGuest");
    pointsGuest.textContent = guestCount;
let pointsHome = document.getElementById("scoresHome");
    pointsHome.innerText = homeCount;

function haddOne() {
    pointsHome.innerText = Number(pointsHome.innerText) + 1 
}
function haddTwo() {
    pointsHome.innerText = Number(pointsHome.innerText) + 2 
}
function haddThree() {
    pointsHome.innerText = Number(pointsHome.innerText) + 3 
}
function gaddOne() {
    pointsGuest.innerText = Number(pointsGuest.innerText) + 1 
}
function gaddTwo() {
    pointsGuest.innerText = Number(pointsGuest.innerText) + 2 
}
function gaddThree() {
    pointsGuest.innerText = Number(pointsGuest.innerText) + 3 
}
function reset(){
    pointsGuest.textContent = guestCount;
    pointsHome.innerText = homeCount;
}
let leadingTeam = document.getElementById("leading");
function leading() {
  if (Number(pointsHome.innerText) > Number(pointsGuest.innerText)){
      leadingTeam.textContent = "Yayy, Home Team is winning"
  } else if (Number(pointsHome.innerText) < Number(pointsGuest.innerText)) {
      leadingTeam.textContent = "Yayy, Guest Team is winning"
  } else {
      leadingTeam.textContent = "Neck to neck"
  }
}

