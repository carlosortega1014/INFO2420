var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

if (document.images) {
    PrintButton1.src = "images/print1.jpg";
    PrintButton2.src = "images/print2.jpg";
    logo1.src = "images/logo1.png";
    logo2.src = "images/logo2.png";
}

var imgArray = [
    "Image1Lg.jpg",
    "Image2Lg.jpg",
    "Image3Lg.jpg",
    "Image4Lg.jpg"
];

var titleArray = [
    "Dog and Cat",
    "Parrot and Dog",
    "Aussie Competing",
    "Angry Cat"
];

var imgPath = "images/fullsize/";

function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    theImage.src = imgPath + imgArray[imgID];
    textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}