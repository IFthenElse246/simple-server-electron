window.onload = function(e) {
    var homeButtons = ["Servers", "Files", "Settings", "Tutorials"]

    var homeContainer = document.getElementById("homeButtons");
    var backButton = document.getElementById("back");
    var pagesContainer = document.getElementById("pages");


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
    var os = navigator.platform.toLowerCase().indexOf('mac') >= 0
    if (os) { // swaps side and puts x first on mac os
    var header = document.getElementById("header")
    header.className = "mac"

    var arr = [2,1,0];
    var wrapper = document.getElementById("header");
    var items = wrapper.children;
    var elements = document.createDocumentFragment();
    
    arr.forEach(function(idx) {
        elements.appendChild(items[idx].cloneNode(true));
    });
    
    wrapper.innerHTML = null;
    wrapper.appendChild(elements);
    }
    
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
}