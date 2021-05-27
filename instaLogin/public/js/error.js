
let errorBtn = document.querySelector("button")

//Function to hide the facebook error div and show the hacker div with the evil sound playing on a loop.
errorBtn.onclick = function () {

  let audio = new Audio("sounds/evil.mp3");
  audio.play();
  audio.loop = true;

  let error = document.getElementById("error");
  error.style.display = "none";

}

