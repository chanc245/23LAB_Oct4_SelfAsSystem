// GET VARIABLES
//index
//// localStorage.setItem('name', userName);

//page1
//// localStorage.setItem('animal', userAnimal);
//// localStorage.setItem('jpSong', jpSong);

//page2
//// localStorage.setItem('color', userColor);
//// localStorage.setItem('vocaloidSong', vocaloidSong);

//page3
//// localStorage.setItem('flower', userFlower);
//// localStorage.setItem('oldSong', oldSong);

//page4
//// localStorage.setItem('mood', mood);
//// localStorage.setItem('match', match);
// ALL VARIABLES

let currentPath = window.location.pathname;
// if (currentPath === '/index.html')

// --------------------FETCHING VARIABLE-------------------- //
// --------------------FETCHING VARIABLE-------------------- //
// --------------------FETCHING VARIABLE-------------------- //
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
  console.log(jpSong);

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
let userColor = null;
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

//vocaloidSong - page2.html
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

//flower - page2.html
let userFlower = null;
let floLastClickedButton = null;
localStorage.setItem('flower', null);
function chooseFlower(choice, buttonFlo) {
  userFlower = choice;
  localStorage.setItem('flower', userFlower);

  if (floLastClickedButton) {
    floLastClickedButton.style.backgroundColor = "#d8d8d8";
    floLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  buttonFlo.style.backgroundColor = "#b8dae6";
  buttonFlo.style.border = "3px solid rgb(103, 192, 224)";

  floLastClickedButton = buttonFlo;
}

//oldSong - page3.html
let oldSong = null;
let oldLastClickedButton = null;
function updateOldSongPref(choice, button) {
  oldSong = choice;
  localStorage.setItem('oldSong', oldSong);

  //changing button color
  if (oldLastClickedButton) {
    oldLastClickedButton.style.backgroundColor = "#d8d8d8";
    oldLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  button.style.backgroundColor = "#bbb8e6";
  button.style.border = "3px solid rgb(112, 127, 247)";

  oldLastClickedButton = button;
}

//mood - page4.html
let mood = null;
let moodLastClickedButton = null;
function moodInput(choice, button) {
  mood = choice;
  localStorage.setItem('mood', mood);

  //changing button color
  if (moodLastClickedButton) {
    moodLastClickedButton.style.backgroundColor = "#d8d8d8";
    moodLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  button.style.backgroundColor = "#bbb8e6";
  button.style.border = "3px solid rgb(112, 127, 247)";

  moodLastClickedButton = button;
}

//mood - page3.html
let match = null;
let matchLastClickedButton = null;
function matchInput(choice, buttonMat) {
  match = choice;
  localStorage.setItem('match', match);

  //changing button color
  if (matchLastClickedButton) {
    matchLastClickedButton.style.backgroundColor = "#d8d8d8";
    matchLastClickedButton.style.border = "3px solid rgba(169, 169, 169, 0)";
  }

  buttonMat.style.backgroundColor = "#bbb8e6";
  buttonMat.style.border = "3px solid rgb(112, 127, 247)";

  matchLastClickedButton = buttonMat;
}


// --------------------LOADING MESSAGE-------------------- //
// --------------------LOADING MESSAGE-------------------- //
// --------------------LOADING MESSAGE-------------------- //
// page1.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userName = urlParams.get("name");

  const p1_welcome = document.getElementById("p1-welcome-Message");
  p1_welcome.innerText = "Hey " + localStorage.getItem("name") + " nice to see you here! :D";
});

// page2.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userAnimalFromStorage = localStorage.getItem("animal");

  const p2_animalMessage = document.getElementById("p2-animal-Message");
  // p2_animalMessage.innerText = "Woo! I see you like " + userAnimalFromStorage + ", here are some cute " + userAnimalFromStorage + "'s GIFs just for you!";

  if (userAnimalFromStorage == "dog") {
    p2_animalMessage.innerText = "Woo! I see you like " + userAnimalFromStorage + ", woof woof!";
  } else {
    p2_animalMessage.innerText = "Woo! I see you like " + userAnimalFromStorage + ", mew mew!!";
  }
});

// page3.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userColorFromStorage = localStorage.getItem("color");

  const p3_colorMessage = document.getElementById("p3-color-Message");
  p3_colorMessage.innerText = "I see you like " + userColorFromStorage + ", I changed the background color just for you! Do you like it?";
});

// page4.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userFlowerFromStorage = localStorage.getItem("flower");
  // console.log(localStorage.getItem("flower"));

  const p4_flowerMessage = document.getElementById("p4-flower-Message");
  p4_flowerMessage.innerText = "Here are some flowers you can drag around with!";
  // if (userFlowerFromStorage == "false") {
  //   p4_flowerMessage.innerText = "it's alright that you don't like flowers! You can drag around some flower to get closer to them c:";

  //   // p4_flowerMessage.innerText = "Here are some flowers you can drag around with!";
  // } else {
  //   p4_flowerMessage.innerText = "Good that you like flowers :D Here are some flowers you can drag around with!";
  // }
});

// result.html
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const userNameFromStorage = localStorage.getItem("name");
  const userAnimalFromStorage = localStorage.getItem("animal");
  const userColorFromStorage = localStorage.getItem("color");
  // const userFlowerFromStorage = localStorage.getItem("flower");
  let userMoodFromStorage = localStorage.getItem("mood");

  if (userMoodFromStorage == "true") {
    userMoodFromStorage = "happy";
  } else {
    userMoodFromStorage = "sad";
  }

  const resultMessage1 = document.getElementById("result-finalMessage1");
  const resultMessage2 = document.getElementById("result-finalMessage2");
  const resultMessage3 = document.getElementById("result-finalMessage3");
  // resultMessage1.innerText =
  //   "Hey "
  //   + userNameFromStorage
  //   + " here's a page that design to fit to your liking, ";

  // resultMessage2.innerText =
  //   "I see that you are "
  //   + userMoodFromStorage
  //   + "! I hope cute "
  //   + userAnimalFromStorage
  //   + " gifs make you a little bit happeier today!";

  resultMessage1.innerText =
    "Hey "
    + userNameFromStorage
    + " thank you for visiting my website!";

  resultMessage2.innerText =
    "I see that you are "
    + userMoodFromStorage
    + "! I hope this song makes you a little bit happeier today!";

  resultMessage3.innerText =
    "Please enjoy this music recommendation from my personal music data :D";
});

// --------------------GIF RANDOM-------------------- //
// --------------------GIF RANDOM-------------------- //
// --------------------GIF RANDOM-------------------- //
// window.onload = function() {}
function randomlySelectGIF() {
  const userAnimalFromStorage = localStorage.getItem("animal");

  if (userAnimalFromStorage == "dog") {
    var gifEmbed = document.querySelectorAll('.dogtenor-gif-embed');
  } else {
    var gifEmbed = document.querySelectorAll('.cattenor-gif-embed');
  }
  var randomIndex = Math.floor(Math.random() * gifEmbed.length);

  for (var i = 0; i < gifEmbed.length; i++) {
    gifEmbed[i].style.display = 'none';
  }

  gifEmbed[randomIndex].style.display = 'block';
}

// this is not working btw.. sad.

// --------------------CALCULATE RESULT-------------------- //
// --------------------CALCULATE RESULT-------------------- //
// --------------------CALCULATE RESULT-------------------- //

function songResult() {
  // console.log("songResult Called");
  var userData = {
    name: localStorage.getItem("name"),
    animal: localStorage.getItem("animal"),
    jpSong: localStorage.getItem("jpSong"),
    color: localStorage.getItem("color"),
    vocaloidSong: localStorage.getItem("vocaloidSong"),
    flower: localStorage.getItem("flower"),
    oldSong: localStorage.getItem("oldSong"),
    mood: localStorage.getItem("mood"),
    match: localStorage.getItem("match")
  };

  var userDataJSON = JSON.stringify(userData);
  console.log(userDataJSON);

  if ((userData.jpSong == "false")) {
    console.log("musical");

    if ((userData.mood == "true") && (userData.match == "true")) {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#musical-upbeat iframe');

    } else if ((userData.mood == "true") && (userData.match == "false")) {
      console.log("sad");
      var iframes = document.querySelectorAll('#musical-sad iframe');

    } else if ((userData.mood == "false") && (userData.match == "true")) {
      console.log("sad");
      var iframes = document.querySelectorAll('#musical-sad iframe');

    } else {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#musical-upbeat iframe');
    }

    if (iframes.length > 0) {
      var randomIndex = Math.floor(Math.random() * iframes.length);
      var randomIframe = iframes[randomIndex];

      for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
      }

      randomIframe.style.display = 'block';
    } else {
      console.log("Error");
    }

  } else if ((userData.jpSong == "true") && (userData.vocaloidSong == "true")) {
    console.log("vocaloid");

    if ((userData.mood == "true") && (userData.match == "true")) {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#vocaloid-upbeat iframe');

    } else if ((userData.mood == "true") && (userData.match == "false")) {
      console.log("sad");
      var iframes = document.querySelectorAll('#vocaloid-sad iframe');

    } else if ((userData.mood == "fasle") && (userData.match == "true")) {
      console.log("sad");
      var iframes = document.querySelectorAll('#vocaloid-sad iframe');

    } else {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#vocaloid-upbeat iframe');
    }

  } else if ((userData.jpSong == "true") && (userData.vocaloidSong == "false") && (userData.oldSong == "true")) {
    console.log("J80sPop");

    var iframes = document.querySelectorAll('#jpop-80s iframe');

  } else if ((userData.jpSong == "true") && (userData.vocaloidSong == "false") && (userData.oldSong == "false")) {
    console.log("JPop");

    if ((userData.mood == "true") && (userData.match == "true")) {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#jpop-upbeat iframe');

    } else if ((userData.mood == "true") && (userData.match == "false")) {
      console.log("chill");
      var iframes = document.querySelectorAll('#jpop-chill iframe');

    } else if ((userData.mood == "fasle") && (userData.match == "true")) {
      console.log("chill");
      var iframes = document.querySelectorAll('#jpop-chill iframe');

    } else {
      console.log("upbeat");
      var iframes = document.querySelectorAll('#jpop-upbeat iframe');
    }

  } else {
    alert("ERROR");
  }

  var randomIndex = Math.floor(Math.random() * iframes.length);

  // Hide all iframes
  for (var i = 0; i < iframes.length; i++) {
    iframes[i].style.display = 'none';
  }

  // Display the randomly selected iframe
  iframes[randomIndex].style.display = 'block';
}

// --------------------FLOWER P5.JS-------------------- //
// --------------------FLOWER P5.JS-------------------- //
// --------------------FLOWER P5.JS-------------------- //

// MOVING FLOWERS AROUND (p5.js)
// let flowerShow = false;

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

  let imgYPosition = 10;
  let imgXPosition = 100;

  // location of images
  images[0].resize(imageSize, imageSize);
  images[0].x = width / 6 * 1 - imgXPosition;
  images[0].y = height / 2 + imgYPosition;

  images[1].resize(imageSize, imageSize);
  images[1].x = width / 6 * 2 - imgXPosition;
  images[1].y = height / 2 + imgYPosition;

  // images[2].resize(imageSize, imageSize);
  // images[2].x = width / 6 * 3;
  // images[2].y = height / 2 + imgYPosition; // remove this so it wont be effecting reading stuff

  images[3].resize(imageSize, imageSize);
  images[3].x = width / 6 * 4 + imgXPosition;
  images[3].y = height / 2 + imgYPosition;

  images[4].resize(imageSize, imageSize);
  images[4].x = width / 6 * 5 + imgXPosition;
  images[4].y = height / 2 + imgYPosition;
}

// currentPath === '/index.html'
function draw() {
  const userFlower = localStorage.getItem("flower");
  const userColor = localStorage.getItem("color");

  // if (currentPath === '/index.html') {
  //   background(250);
  // }

  if ((userColor !== "null")) {
    if (userColor == "pink") {
      background('#FCEAEA');//light pink
    } else if (userColor == "orange") {
      background('#FFE9D9');//light orange
    } else if (userColor == "yellow") {
      background('#FFFCDF');//light yellow
    } else if (userColor == "green") {
      background('#EAFCEB');//light green
    } else if (userColor == "blue") {
      background('#EAF3FC');//light blue
    } else if (userColor == "purple") {
      background('#F6EAFC');//light purple
    } else {
      background(250);
    }
  }

  // if ((userFlower !== "null")) {
  if ((currentPath === '/page4.html') || (currentPath === '/result.html')) {
    for (let img of images) {
      image(img, img.x, img.y);
      // console.log(userFlower);
    }
    // }
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