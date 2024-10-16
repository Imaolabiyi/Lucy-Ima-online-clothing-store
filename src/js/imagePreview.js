var prodImg = document.getElementById("prodImg");
var smallImgs = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = function () {
        prodImg.src = smallImgs[i].src;
    }
}
