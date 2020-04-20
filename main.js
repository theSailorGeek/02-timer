var timeset = 3600000;
var actualtime = "60:00";
document.getElementById('clock').innerHTML = actualtime;
document.getElementsByTagName('title')[0].innerHTML = actualtime;
var countdown = 1

    /*
function startTimer() {
    endtime = Date.now() + timeset;
    while (countdown > 0) {
        runTimer();
    }

    function runTimer(i) {
        setTimeout(function() {
        countdown = endtime - Date.now();
        var minutes = Math.floor((countdown / 60000));
        var seconds = Math.floor((countdown % 60) / 1000);
        var seconds = ("0" + seconds).slice(-2)
        var actualtime = minutes + ":" + seconds;
        document.getElementById('clock').innerHTML = actualtime;
        document.getElementsByTagName('title')[0].innerHTML = actualtime;
    }, 2000*i);
}
}
*/
