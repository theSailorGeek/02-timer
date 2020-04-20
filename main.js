var inputHours = "";
var inputMinutes = "";
var inputSeconds = "";

var alarm = new Audio('sounds/alarm.mp3');
alarm.loop = false;

function setTime() {
    
    inputHours = document.getElementById("hours").value;
    inputMinutes = document.getElementById("minutes").value;
    inputSeconds = document.getElementById("seconds").value;
    time = inputHours*3600 + inputMinutes*60 + inputSeconds*1;
    
    var startHours = Math.floor(time / 3600);
    var startMinutes = Math.floor((time % 3600)/60);
    var startSeconds = Math.floor((time % 3600) % 60);

    if (time >= 3600) {
        startMinutes = ("0" + startMinutes).slice(-2);
        startSeconds = ("0" + startSeconds).slice(-2);
        setTimer = startHours +":" + startMinutes + ":" + startSeconds;
        
    }
    else if (time < 3600 && time >=60){
        startSeconds = ("0" + startSeconds).slice(-2);
        setTimer = startMinutes +":"+ startSeconds;
    }
    else {
        setTimer = startSeconds + "s";
    }
    
    document.getElementsByTagName('title')[0].innerHTML = setTimer;
    document.getElementById('clock').innerHTML = setTimer;
    document.getElementById("setTime").remove();
}




function startTimer() {
    const timeNow = Date.now();
    const endTime = timeNow + time*1000;
    document.getElementById("start").remove();
    document.getElementById("reset")

setInterval(() => {
    
    
    
    const seconsdsLeft = Math.floor((endTime - Date.now()) / 1000);
    const hours = Math.floor(seconsdsLeft / 3600);
    var minutes = Math.floor((seconsdsLeft % 3600)/60);
    var seconds = Math.floor((seconsdsLeft % 3600) % 60);
    var timer = ""
    if (seconsdsLeft >= 3600) {
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        timer = hours+":" +minutes +":"+ seconds;
    }
    else if (seconsdsLeft <3600 && seconsdsLeft >= 60) {
        seconds = ("0" + seconds).slice(-2);
        timer = minutes +":"+ seconds;
    }
    else {
        timer = seconds + "s"
    }
   if (seconsdsLeft == 1) {
       alarm.play();
   }
    if(seconsdsLeft <= 0) {
        
        document.getElementById("clock").innerHTML = "";
        document.getElementsByTagName("h1")[0].innerHTML = "Time is up!"
        document.getElementsByTagName("title")[0].innerHTML = "Time is up!"
        
        return;
    }
    
    document.getElementsByTagName('title')[0].innerHTML = timer;
    document.getElementById('clock').innerHTML = timer;
   
}, 500);
}

