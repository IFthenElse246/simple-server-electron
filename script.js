const {remote} = require('electron');

var homeButtons = ["Servers", "Files", "Settings", "Tutorials"]


var homeContainer = document.getElementById("homeButtons");
var backButton = document.getElementById("back");
var pagesContainer = document.getElementById("pages");

var closeBttn = document.getElementById("close")
closeBttn.addEventListener('click', closeWindow);
var minBttn = document.getElementById("minimize")
minBttn.addEventListener('click', minimizeWindow);
var maxBttn = document.getElementById("maximize")
maxBttn.addEventListener('click', maximizeWindow);

function closeWindow() {
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizeWindow() {
    var window = remote.getCurrentWindow();
    window.minimize();
}

function maximizeWindow() {
    var window = remote.getCurrentWindow();
    window.maximize();
}


var pc = [];
for (var pccccccc of homeButtons) {
    var newDiv = document.createElement("div");
    newDiv.id = pccccccc;
    pagesContainer.appendChild(newDiv)
    pc.push(newDiv);
}
pageContainers = {};
for (var pcc of pc) {
    pcc.hidden = true;
    pageContainers[pcc.id] = pcc;
}

backButton.hidden = true;


function initHomeButtons(homeButtons) {
    for (var button of homeButtons) {
        var div = document.createElement("button");
        div.innerText = button;
        div.dataset.buttonType = button;
        homeContainer.appendChild(div);
        div.addEventListener("click", handler);
    }
}

initHomeButtons(homeButtons)


function handler(clickEvent) {
    var typee = clickEvent.target.dataset.buttonType;

    pageContainers[typee].hidden = false;
    backButton.hidden = false;
    homeContainer.hidden = true;

    pageContainers[typee].innerHTML = "";

    var header = document.createElement("div");
    header.className = "header";
    header.innerText = typee;
    pageContainers[typee].appendChild(header);
    
    
    if (typee == "Servers") {
        var cont = document.createElement("div");
        cont.className = "scrollable";
        pageContainers[typee].appendChild(cont);

      for (var i = 0; i < 200; i++) {
          var div = document.createElement("div");
          div.className = "serverListItem";
          div.innerText = "boring content blahblah lorem ipsum blah";
          cont.appendChild(div);
      }
    }

    if (typee == "Files") {
      
    }

    if (typee == "Settings") {
      
    }

    if (typee == "Tutorials") {
      
    }
}

backButton.addEventListener("click", (e) => {
    for (var pcc of pc) {
        pcc.hidden = true;
    }
    backButton.hidden = true;
    homeContainer.hidden = false;
})