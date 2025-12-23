var txtBox = document.getElementById("text-box");
var prev = document.getElementById("preview");
var allBtns = document.getElementsByTagName("button");

txtBox.addEventListener("input", function(){
    if (txtBox.value == "") {
        prev.innerText = "Nothing to preview...";
        for (var i = 0; i < allBtns.length; i++) {
            allBtns[i].style.backgroundColor = "rgb(218, 218, 218)";
            allBtns[i].style.color = "black";
            allBtns[i].style.cursor = "not-allowed";
        }
    } else {
        prev.innerText = txtBox.value;
        for (var i = 0; i < allBtns.length; i++) {
            allBtns[i].style.backgroundColor = "blue";
            allBtns[i].style.color = "white";
            allBtns[i].style.cursor = "pointer";
        }
    }
})


allBtns[0].addEventListener("click", function(){
    txtBox.value = txtBox.value.toUpperCase();
    prev.innerText = prev.innerText.toUpperCase();
})


allBtns[1].addEventListener("click", function(){
    txtBox.value = txtBox.value.toLowerCase();
    prev.innerText = prev.innerText.toLowerCase();
})


