var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //If the number has 1 character, insert a "0" before it
  days < 10 ? days = `0${days}` : days;
  hours < 10 ? hours = `0${hours}` : hours;
  minutes < 10 ? minutes = `0${minutes}` : minutes;
  seconds < 10 ? seconds = `0${seconds}` : seconds;

  //Show the numbers on HTML
  document.getElementById("h1_day").innerHTML = days;
  document.getElementById("h1_hour").innerHTML = hours;
  document.getElementById("h1_minute").innerHTML = minutes;
  document.getElementById("h1_second").innerHTML = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);