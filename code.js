var log = "";
var curCommand = 0;
var active = true;
var correct = true;

function process(e) {
  if (active) {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    log = log + x + " " + y + "\n";
    displayLog();
  }
}

function next() {
  if (active) {
    if (curCommand == commands.length) {
      log = log + "bitti\n";
      document.getElementById("command").innerHTML = "Bravo, maceranin sonuna geldin! Tam puan almak icin, asagidaki logu yazdiran bir programi hackerrank'e gonder.";
      active = false;
    } else {
      log = log + "sonraki\n";
      document.getElementById("command").innerHTML = "<b>Seviye " + (curCommand+2) + ":</b> " + commands[curCommand] + " Ardindan <b>Sonraki</b> tusuna bas.";
      curCommand += 1;
    }
    displayLog();
  }
}

function displayLog() {
  document.getElementById('log').value = log;
}
