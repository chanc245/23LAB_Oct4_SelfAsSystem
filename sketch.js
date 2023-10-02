// GET VARIABLES
//index
//// localStorage.setItem('name', userName);

//page1
//// localStorage.setItem('animal', userAnimal);
//// localStorage.setItem('jpSong', jpSong);

//page2
//// localStorage.setItem('color', userColor);
//// localStorage.setItem('vocaloidSong', vocaloidSong);
// ALL VARIABLES

//name - index.html
function getName() {
  var nameInput = document.getElementById("name-input");
  var userName = nameInput.value;
  localStorage.setItem('name', userName);
}

//animel - page1.html
let userAnimal = '';
let AniLastClickedButton = null;
function chooseAnimal(choice, button1) {
  userAnimal = choice;
  localStorage.setItem('animal', userAnimal);

  if (AniLastClickedButton) {
    AniLastClickedButton.style.backgroundColor = "#d8d8d8";
    AniLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  button1.style.backgroundColor = "#b8dae6";
  button1.style.border = "3px solid rgb(103, 192, 224)";

  AniLastClickedButton = button1;
}

//jpSong - page1.html
let jpSong = null;
let jpLastClickedButton = null;
function updateSongPref(choice, button) {
  jpSong = choice;
  localStorage.setItem('jpSong', jpSong);

  //changing button color
  if (jpLastClickedButton) {
    jpLastClickedButton.style.backgroundColor = "#d8d8d8";
    jpLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  button.style.backgroundColor = "#bbb8e6";
  button.style.border = "3px solid rgb(112, 127, 247)";

  jpLastClickedButton = button;
}

//color - page2.html
let userColor = '';
let ColLastClickedButton = null;
function chooseColor(choice, buttonCol) {
  userColor = choice;
  localStorage.setItem('color', userColor);

  if (ColLastClickedButton) {
    ColLastClickedButton.style.backgroundColor = "#d8d8d8";
    ColLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  buttonCol.style.backgroundColor = "#b8dae6";
  buttonCol.style.border = "3px solid rgb(103, 192, 224)";

  ColLastClickedButton = buttonCol;
}

let vocaloidSong = null;
let vocLastClickedButton = null;
function updateVocaloidSongPref(choice, button) {
  vocaloidSong = choice;
  localStorage.setItem('vocaloidSong', vocaloidSong);

  //changing button color
  if (vocLastClickedButton) {
    vocLastClickedButton.style.backgroundColor = "#d8d8d8";
    vocLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  button.style.backgroundColor = "#bbb8e6";
  button.style.border = "3px solid rgb(112, 127, 247)";

  vocLastClickedButton = button;
}

// LOADING MESSAGE
// page1.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userName = urlParams.get("name");

  const p1_welcome = document.getElementById("p1-welcome-Message");
  p1_welcome.innerText = "Hey " + localStorage.getItem("name") + " nice to meet you :D";
});

// page2.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userAnimalFromStorage = localStorage.getItem("animal");

  const p2_animalMessage = document.getElementById("p2-animal-Message");
  p2_animalMessage.innerText = "Woo! I see you like " + userAnimalFromStorage + ", here are some cute " + userAnimalFromStorage + "'s GIFs just for you!";
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