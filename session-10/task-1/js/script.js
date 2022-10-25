function turnOn() {
  document.getElementById("lightbulb").src = "img/pic_bulbon.gif";
  console.log("bulb on");
}

function turnOff() {
  document.getElementById("lightbulb").src = "img/pic_bulboff.gif";
  console.log("bulb off");
}

function changeText() {
  document.getElementById("change-text").innerHTML =
    "The text has been changed! Reload the page to reset.";
  console.log("change text");
}
