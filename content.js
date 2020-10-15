
var myPlayer = document.querySelectorAll("video")[0];

var interval;
console.log("startTime set to :" + 0);
var startTime = 0;

console.log("stopTime set to :" + myPlayer.duration);
var stopTime = myPlayer.duration;


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


  if (request === "start") {
    console.log("setting start as:" + myPlayer.currentTime)
    startTime = myPlayer.currentTime;
  }

  if (request === "stop") {
    console.log("setting stop as:" + myPlayer.currentTime)
    stopTime = myPlayer.currentTime;
    loopFun();

  }

  if (request === "end") {
    console.log("ending loop");
    clearInterval(interval);
  }

  if (request === "loop") {
    loopFun();
  }

});


function loopFun(){
  console.log(`Loop starting from ${startTime} to ${stopTime}`);
  if (interval != undefined) {
    clearInterval(interval);
    console.log("clear setInterval");
    myPlayer.currentTime = startTime;
  }
  interval = setInterval(function () {
    if (myPlayer.currentTime >= stopTime || myPlayer.currentTime <= startTime) {
      console.log("Jump to start");
      myPlayer.currentTime = startTime;
    }
  }, 500);
};

//alert('Grrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   const re = new RegExp('bear', 'gi')
//   const matches = document.documentElement.innerHTML.match(re)
//   sendResponse({count: matches.length})
// })

// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length
// })