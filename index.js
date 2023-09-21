

// let homeScore = document.getElementById("home-score");

let homeScore = 0;
let guestScore = 0;
// console.log(homeScore);


// start a new game
function reset() {
    location.reload();
}

// TODO: refactor
function add1PointHome() {
    homeScore += 1;
    document.getElementById("home-score").innerHTML = homeScore;
    showLeader()

}

function add2PointHome() {
    homeScore += 2;
    document.getElementById("home-score").innerHTML = homeScore;
    showLeader()
}

function add3PointHome() {
    homeScore += 3;
    document.getElementById("home-score").innerHTML = homeScore;
    showLeader()
}

function add1PointGuest() {
    guestScore += 1;
    document.getElementById("guest-score").innerHTML = guestScore;
    showLeader()
}

function add2PointGuest() {
    guestScore += 2;
    document.getElementById("guest-score").innerHTML = guestScore;
    showLeader()
}

function add3PointGuest() {
    guestScore += 3;
    document.getElementById("guest-score").innerHTML = guestScore;
    showLeader()
}

// change border color around score to show teams winning, losing or drawing
 function showLeader() {

    if ( homeScore > guestScore ) {
        document.getElementById("home-score").style.borderColor = "yellow"
        document.getElementById("guest-score").style.borderColor = "black"
    }
    else if (homeScore < guestScore) {
        document.getElementById("guest-score").style.borderColor = "yellow"
        document.getElementById("home-score").style.borderColor = "black"
    }
    else {
        document.getElementById("guest-score").style.borderColor = "gray"
        document.getElementById("home-score").style.borderColor = "gray"
    }
 }

// countdown timer

var timeInSecs;
var ticker;
var periodCount = 1; // count which period game is in

// flag to pause game 
var paused = false;

function startTimer(secs) {
    
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000); 
}

function tick( ) {
    var secs = timeInSecs;
        if (secs > 0) {
        timeInSecs--; 
    }
    else {
        // every time countdown ends increment period by 1
        if ( periodCount <= 3 ) { // periodCount will be incremented up to 4
            periodCount ++; // increment period counter
            document.getElementById("period").textContent = periodCount
            clearInterval(ticker);
            startTimer(3); // 12 minutes is the duration of an NBA quarter
        }
        
    }

    var mins = Math.floor(secs/60);
    secs %= 60;
    var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(4); // a basketball game has 4 quarters (periods) so we need to run the countdown 4 times  


/* To DO
function resumeGame() {
    paused = false;
   }

   function pauseGame() {
    paused = true;
   }
   */