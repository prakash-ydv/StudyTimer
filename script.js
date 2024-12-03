let studyMinute = document.getElementById('studyMinute');
let studySecond = document.getElementById('studySecond');

let restMinute = document.getElementById('restMinute');
let restSecond = document.getElementById('restSecond');

let studySecondCounter = 0;
let studyMinuteCounter = 0;

let restMinuteCounter = 0;
let restSecondCounter = 0;

let isStudying = false;
let isResting = false;

let studyInterval = null;
let restInterval = null;

function startStudy() {
    if (studyInterval) return; // Prevent multiple intervals
    isStudying = true;
    isResting = false;
    stopResting(); // Ensure rest timer is stopped
    studyInterval = setInterval(startTimer, 1000);
}

function stopStudy() {
    clearInterval(studyInterval);
    studyInterval = null; // Reset interval ID
}

function startRest() {
    if (restInterval) return; // Prevent multiple intervals
    isResting = true;
    isStudying = false;
    stopStudy(); // Ensure study timer is stopped
    restInterval = setInterval(startRestTimer, 1000);
}

function stopResting() {
    clearInterval(restInterval);
    restInterval = null; // Reset interval ID
}

function startTimer() {
    if (studySecondCounter < 59) {
        studySecondCounter += 1;
    } else {
        studySecondCounter = 0;
        studyMinuteCounter += 1;
    }
    // Update display with two-digit format
    studySecond.innerHTML = String(studySecondCounter).padStart(2, '0');
    studyMinute.innerHTML = String(studyMinuteCounter).padStart(2, '0');
}

function startRestTimer() {
    if (restSecondCounter < 59) {
        restSecondCounter += 1;
    } else {
        restSecondCounter = 0;
        restMinuteCounter += 1;
    }
    // Update display with two-digit format
    restSecond.innerHTML = String(restSecondCounter).padStart(2, '0');
    restMinute.innerHTML = String(restMinuteCounter).padStart(2, '0');
}
