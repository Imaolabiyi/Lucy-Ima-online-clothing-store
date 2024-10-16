// imagePreview.js
var prodImg = document.getElementById("prodImg");
var smallImg = document.getElementsByClassName("small-img");

function previewImage(index) {
    prodImg.src = smallImg[index].src;
}

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        previewImage(i);
    }
}
