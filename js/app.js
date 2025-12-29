var txtBox = document.getElementById("text-box");
var prev = document.getElementById("preview");
var allBtns = document.getElementsByTagName("button");
var wd = document.getElementById("words");
var chars = document.getElementById("chars");
var read = document.getElementById("read");

function clearAll() {
    prev.innerText = "Nothing to preview...";
    for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].style.backgroundColor = "rgb(218, 218, 218)";
        allBtns[i].style.color = "black";
        allBtns[i].style.cursor = "not-allowed";
    }
    chars.innerText = 0;
    wd.innerText = 0;
    read.innerText = "0 mins";
}

txtBox.addEventListener("input", function () {
    if (txtBox.value == "") {
        clearAll();
    } else {
        prev.innerText = txtBox.value;
        for (var i = 0; i < allBtns.length; i++) {
            allBtns[i].style.backgroundColor = "blue";
            allBtns[i].style.color = "white";
            allBtns[i].style.cursor = "pointer";
        }
        for (var i = 1; i <= txtBox.value.length; i++) {
            chars.innerText = i;
        }

        if (txtBox.value.trim() != "") {
            var words = txtBox.value.trim().split(/\s+/g);
            var count;
            for (var i = 1; i <= words.length; i++) {
                wd.innerText = i;
                count = i;
            }
            var rdTime = count*0.33;
            if (rdTime <= 60) {
                read.innerText = rdTime + " secs";
            } else {
                read.innerText = JSON.stringify(rdTime/60).slice(0, 5) + " mins";
            }
            
        }
    }
})


allBtns[0].addEventListener("click", function () {
    txtBox.value = txtBox.value.toUpperCase();
    prev.innerText = prev.innerText.toUpperCase();
})


allBtns[1].addEventListener("click", function () {
    txtBox.value = txtBox.value.toLowerCase();
    prev.innerText = prev.innerText.toLowerCase();
})


// RegExp Rules
// Start => /
// End => /
// start of string => ^
// 0 or more whitespace chars => \s*
// first word char (a-z, A-Z, 0-9, _) => \w


allBtns[3].addEventListener("click", function () {
    var str = txtBox.value;
    str = str.toLowerCase().replace(/(^[a-z])|(\. *[a-z])/g, function (x) {
        return x.toUpperCase();
    })

    txtBox.value = str;
    prev.innerText = str;
})


allBtns[2].addEventListener("click", function () {
    var words = txtBox.value.split(" ");
    txtBox.value = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        txtBox.value = txtBox.value + word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
        prev.innerText = txtBox.value;
    }
})

// words = ['hello','how','are','you']
// word = 'hello';
// slice = 'ello';
// 'Hello ' 

allBtns[4].addEventListener("click", function () {
    txtBox.value = txtBox.value.replace(/\s+/g, " ").trim();
})

allBtns[5].addEventListener("click", function () {
    txtBox.value = "";
    clearAll();
})

allBtns[6].addEventListener("click", function(){
    if (prev.innerText == "" || prev.innerText == "Nothing to preview...") {
        alert("Nothing to copy!");
    } else {
        navigator.clipboard.writeText(prev.innerText);
        alert("Text copied...");
    }
    
})