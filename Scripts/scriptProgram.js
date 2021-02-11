var currentPeriodInSeconds;
var timesWork = 0;
var isWorking;

/* Run when the program starts */
function SetStarted()
{
    let now = new Date();
    document.getElementById("started").innerHTML = 
    now.getDate() + "/" + (now.getMonth() + 1) + "  " + 
    now.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    + ":" + 
    now.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    + ":" +
    now.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    window.LoadList();

    window.StartWork();
}

/* Load our TODO list */
function LoadList() {
    let myList = JSON.parse(sessionStorage.getItem("myList"));
    var myUl = document.getElementById("myUL");
    for (const li of myList) {
        myUl.innerHTML += li;
    }
}

function Timer_Tick() {
    currentPeriodInSeconds--;
    PrintTime();
    if (currentPeriodInSeconds == 0) {
        if (!isWorking)
            StartBreak();
        else
            StartWork();
    }
}

/* Start the working period */
function StartWork() {
    /* Set variables */
    currentPeriodInSeconds = 1500;
    timesWork++;
    isWorking = false;

    document.getElementById("head").innerHTML = "Work period";
    alert("Time to put in some more work!");

    PrintTime(); // Print
}

/* Start the break period */
function StartBreak() {
    /* Set variables */
    if (timesWork / 4 >= 1 && timesWork % 4 == 0) {
        currentPeriodInSeconds = 900;
        alert("Time for a longer break.");
    } else {
        currentPeriodInSeconds = 300;
        alert("Time for a quick break.");
    }
    isWorking = true;

    document.getElementById("head").innerHTML = "Break period";

    PrintTime(); // Print
}

/* Re-new the timer */
function PrintTime() {
    let myDiv = parseInt(currentPeriodInSeconds / 60);
    let myMod = currentPeriodInSeconds % 60;
    document.getElementById("timer").innerHTML = 
    myDiv.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    + "m " + 
    myMod.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    + "s";
}


window.SetStarted();
var x = setInterval(Timer_Tick, 1000);