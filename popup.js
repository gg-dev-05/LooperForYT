
document.querySelector("#loop").addEventListener("click", loop, false);
document.querySelector("#start").addEventListener("click", start, false);
document.querySelector("#stop").addEventListener("click", stop, false);
document.querySelector("#end").addEventListener("click", end, false);


function loop() {
  console.log("loop");
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "loop");
  })
}

function start() {
  console.log("start");
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "start");
  })
}

function stop() {
  console.log("stop");
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "stop");
  })
}

function end() {
  console.log("end");
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "end");
  })
}

// document.addEventListener('DOMContentLoaded', function () {

//   const bg = chrome.extension.getBackgroundPage()
//   Object.keys(bg.bears).forEach(function (url) {
//     const div = document.createElement('div')
//     div.textContent = `${url}: ${bg.bears[url]}`
//     document.body.appendChild(div)
//   })

  // document.querySelector('button').addEventListener('click', onclick, false)
  //
  // function onclick () {
  //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
  //   })
  // }
  //
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
// }, false)