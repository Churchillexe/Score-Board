const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");
const heroMainEl = document.getElementById("hero-main");

const foulOneEl = document.getElementById("foul-one");
const foulTwoEl = document.getElementById("foul-two");
const foulThreeEl = document.getElementById("foul-three");
const foulFourEl = document.getElementById("foul-four");
const foul1El = document.getElementById("foul-1");
const foul2El = document.getElementById("foul-2");
const foul3El = document.getElementById("foul-3");
const foul4El = document.getElementById("foul-4");


const q1BtnEl = document.getElementById("q1-btn");
const q2BtnEl = document.getElementById("q2-btn");
const q3BtnEl = document.getElementById("q3-btn");
const q4BtnEl = document.getElementById("q4-btn");

let homeScore = 0;
let guestScore = 0;

changed = false;
changed2 = false;
changed3 = false;
changed4 = false;

let tick = true;

function addHome(num,team) {

    // if (teamScore === homeScore) {
    //     homeScore += num;
    //     team.textContent = homeScore;
    //     scoreBoard()

    // } else if (teamScore === guestScore) {
    //     guestScore += num;
    //     team.textContent = guestScore;
    //     scoreBoard()
    // };
    homeScore += num;
        team.textContent = homeScore;
        scoreBoard()
}
function addGuest(num,team) {
        guestScore += num;
        team.textContent = guestScore;
        scoreBoard()
}

function newGame() {
    let equalScore = `
        <span id="home-score" class="score-scrn">0</span>
        <span id="guest-score" class="score-scrn">0</span>`
    homeScore = 0;
    guestScore = 0;
    changed = false;
    changed2 = false;
    changed3 = false;
    changed4 = false;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    heroMainEl.innerHTML = equalScore;
    q1BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange()">I</button>`;
    q2BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange2()">II</button>`;
    q3BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange3()">III</button>`;
    q4BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange4()">IV</button>`;
    
    foulOneEl.textContent = `⚫`;
    foulTwoEl.textContent = `⚫`;
    foulThreeEl.textContent = `⚫`;
    foulFourEl.textContent = `⚫`;
    foul1El.textContent = `⚫`;
    foul2El.textContent = `⚫`;
    foul3El.textContent = `⚫`;
    foul4El.textContent = `⚫`;
    tick = true;
}

// function btnChange(qnumBtn,qnum) {
//         let num = qnum
//         let numBtn = qnumBtn
//     if (changed === false) {
//         let highLight = `<button class="pressed-quarter-btn" onclick="btnChange(${numBtn},${num})">${num}</button>`
//         numBtn.innerHTML = highLight;
//         changed = true;
//     } else if (changed === true) {
//         changed = false;
//         let highLight = `<button class="quarter-btn" onclick="btnChange(${numBtn},${num})">${num}</button>`
//         numBtn.innerHTML = highLight;
//     }
// }

function btnChange() {
    if (changed === false) {
        let highLight = `<button class="pressed-quarter-btn" onclick="btnChange()">I</button>`
        q1BtnEl.innerHTML = highLight;
        changed = true;
    } else if (changed === true) {
        changed = false;
        let highLight = `<button class="quarter-btn" onclick="btnChange()">I</button>`
        q1BtnEl.innerHTML = highLight;
    }
}

function btnChange2() {
    if (changed2 === false) {
        let highLight = `<button class="pressed-quarter-btn" onclick="btnChange2()">II</button>`
        q2BtnEl.innerHTML = highLight;
        changed2 = true;
        q1BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange()">I</button>`
        changed = false;
    } else if (changed2 === true) {
        changed2 = false;
        let highLight = `<button class="quarter-btn" onclick="btnChange2()">II</button>`
        q2BtnEl.innerHTML = highLight;
    }
}

function btnChange3() {
    if (changed3 === false) {
        let highLight = `<button class="pressed-quarter-btn" onclick="btnChange3()">III</button>`
        q3BtnEl.innerHTML = highLight;
        changed3 = true;
        q2BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange2()">II</button>`
        changed2 = false;
    } else if (changed3 === true) {
        changed3 = false;
        let highLight = `<button class="quarter-btn" onclick="btnChange3()">III</button>`
        q3BtnEl.innerHTML = highLight;
    }
}

function btnChange4() {
    if (changed4 === false) {
        let highLight = `<button class="pressed-quarter-btn" onclick="btnChange4()">IV</button>`
        q4BtnEl.innerHTML = highLight;
        changed4 = true;
        q3BtnEl.innerHTML = `<button class="quarter-btn" onclick="btnChange3()">III</button>`;
        changed3 = false;
    } else if (changed4 === true) {
        changed4 = false;
        let highLight = `<button class="quarter-btn" onclick="btnChange4()">IV</button>`
        q4BtnEl.innerHTML = highLight;
    }
}

function scoreBoard(){
    let homeHigher = `
        <span id="home-score" class="score-scrn1">${homeScore}</span>
        <span id="guest-score" class="score-scrn">${guestScore}</span>`
    let guestHigher = `
        <span id="home-score" class="score-scrn">${homeScore}</span>
        <span id="guest-score" class="score-scrn1">${guestScore}</span>`
    let equalScore = `
        <span id="home-score" class="score-scrn">${homeScore}</span>
        <span id="guest-score" class="score-scrn">${guestScore}</span>`
    if (homeScore > guestScore) {
        heroMainEl.innerHTML = homeHigher;
    } else if (guestScore > homeScore) {
        heroMainEl.innerHTML = guestHigher;
    } else {
        heroMainEl.innerHTML = equalScore;
    }
}

function foulChange(foulNum){
    if (tick){
        foulNum.textContent = `🔴`;
        tick = false;
    } else {
        foulNum.textContent = `⚫`;
        tick = true;
    }
}