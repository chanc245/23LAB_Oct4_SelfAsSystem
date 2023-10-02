// GET VARIABLES
function getName() {
  var nameInput = document.getElementById("name-input");
  var userName = nameInput.value;
  localStorage.setItem('name', userName);
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");

  const message_p2 = document.getElementById("p2_message");
  message_p2.innerText = "Hey " + localStorage.getItem("name") + "";
});




// MOVING FLOWERS AROUND (p5.js)
let flowerShow = false;

let images = [];
let imageSize = 200; // all sizes
let selectedImage = null;
let offset = null;

function preload() {
  images.push(loadImage('image/f1.png'));
  images.push(loadImage('image/f2.png'));
  images.push(loadImage('image/f3.png'));
  images.push(loadImage('image/f4.png'));
  images.push(loadImage('image/f5.png'));
}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.parent('canvas-wrapper');

  imageMode(CENTER);

  let imgPosition = 0;

  // location of images
  images[0].resize(imageSize, imageSize);
  images[0].x = width / 6 * 1;
  images[0].y = height / 2 + imgPosition;

  images[1].resize(imageSize, imageSize);
  images[1].x = width / 6 * 2;
  images[1].y = height / 2 + imgPosition;

  images[2].resize(imageSize, imageSize);
  images[2].x = width / 6 * 3;
  images[2].y = height / 2 + imgPosition;

  images[3].resize(imageSize, imageSize);
  images[3].x = width / 6 * 4;
  images[3].y = height / 2 + imgPosition;

  images[4].resize(imageSize, imageSize);
  images[4].x = width / 6 * 5;
  images[4].y = height / 2 + imgPosition;
}

function draw() {
  // background(100);

  if (flowerShow) {
    for (let img of images) {
      image(img, img.x, img.y);
    }
  }
}

function mousePressed() {
  for (let i = images.length - 1; i >= 0; i--) {
    let img = images[i];
    let x1 = img.x - imageSize / 2;
    let x2 = img.x + imageSize / 2;
    let y1 = img.y - imageSize / 2;
    let y2 = img.y + imageSize / 2;

    if (mouseX >= x1 && mouseX <= x2 && mouseY >= y1 && mouseY <= y2) {
      selectedImage = img;
      offset = createVector(mouseX - selectedImage.x, mouseY - selectedImage.y);
      break;
    }
  }
}

function mouseDragged() {
  if (selectedImage) {
    selectedImage.x = mouseX - offset.x;
    selectedImage.y = mouseY - offset.y;
  }
}

function mouseReleased() {
  selectedImage = null;
}