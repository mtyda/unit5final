// Arrays of random content
const headlines = [
  " "
];

const messages = [
  "You’ve opened a window to another reality.",
  "Every refresh tells a slightly different truth.",
  "What you see now may not exist again.",
  "Chaos is the only constant.",
  "Art is in the reload.",
  "A New Beginning",
  "The Browser Dreams Again",
  "Tab 47: A Lost Memory",
  "The Internet Never Sleeps",
  "Welcome to Version ∞"
];

const leftImages = [
"testimage/IMG_7449.JPEG ",
"testimage/IMG_7469.JPEG ",
"testimage/IMG_7538.JPEG ",
"testimage/IMG_7732.JPEG ",
"testimage/IMG_8239.JPEG"
];

const rightImages = [
"testimage/IMG_8251.JPEG ",
"testimage/IMG_8335.JPEG ",
"testimage/IMG_8343.JPEG ",
"testimage/IMG_8406.JPEG ",
"testimage/IMG_8431.JPEG"
];


// --- HELPER FUNCTION ---
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- LEFT & RIGHT IMAGE ELEMENTS ---
const leftImage = document.querySelector(".left img");
const rightImage = document.querySelector(".right img");

// --- INITIAL DISPLAY ---
leftImage.src = randomItem(leftImages);
rightImage.src = randomItem(rightImages);

// --- DIFFERENT REFRESH SPEEDS ---
setInterval(() => {
  leftImage.src = randomItem(leftImages);
}, 3000); // Left image changes every 5 seconds

setInterval(() => {
  rightImage.src = randomItem(rightImages);
}, 5000); // Right image changes every 15 seconds
