// myscripts.js - External JavaScript for Native Cooking of Utah

// Logo image rollover functions
function logoOver() {
    document.getElementById("logoImg").src = "Images/Logo_2.jpeg";
}

function logoOut() {
    document.getElementById("logoImg").src = "Images/Logo_1.jpeg";
}

// Thumbnail image swap on hover
var defaultFullImage = "Images/fullsize/image1lg.jpg";

function swapImage(src) {
    document.getElementById("fullimage").src = src;
}

function resetImage() {
    document.getElementById("fullimage").src = defaultFullImage;
}

// Preload fullsize images and logo rollover
function preloadImages() {
    var img1 = new Image(); img1.src = "Images/fullsize/image1lg.jpg";
    var img2 = new Image(); img2.src = "Images/fullsize/image2lg.jpg";
    var img3 = new Image(); img3.src = "Images/fullsize/image3lg.jpg";
    var img4 = new Image(); img4.src = "Images/fullsize/image4lg.jpg";
    var logoRollover = new Image(); logoRollover.src = "Images/Logo_2.jpeg";
}
