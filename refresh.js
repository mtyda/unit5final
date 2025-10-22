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

const images1 = [
 "images1/IMG_0054.JPEG ",
 "images1/IMG_0112.JPEG ",
 "images1/IMG_0386.JPEG ",
 "images1/IMG_0601.JPEG ",
 "images1/IMG_0669.JPEG ",
 "images1/IMG_0745.JPEG ",
 "images1/IMG_0854.JPEG ",
 "images1/IMG_1070.JPEG ",
 "images1/IMG_1107.JPEG ",
 "images1/IMG_1262.JPEG ",
 "images1/IMG_1327.JPEG ",
 "images1/IMG_1473.JPEG ",
 "images1/IMG_1592.JPEG ",
 "images1/IMG_1660.JPEG ",
 "images1/IMG_1861.JPEG ",
 "images1/IMG_1935.JPEG ",
 "images1/IMG_2045.JPEG ",
 "images1/IMG_2060.JPEG ",
 "images1/IMG_2158.JPEG ",
 "images1/IMG_2162.JPEG ",
 "images1/IMG_2293.JPEG ",
 "images1/IMG_2315.JPEG ",
 "images1/IMG_2362.JPEG ",
 "images1/IMG_2389.JPEG ",
 "images1/IMG_2506.JPEG ",
 "images1/IMG_2538.JPEG ",
 "images1/IMG_2603.JPEG ",
 "images1/IMG_2638.JPEG ",
 "images1/IMG_2674.JPEG ",
 "images1/IMG_2715.JPEG ",
 "images1/IMG_2727.JPEG ",
 "images1/IMG_2784.JPEG ",
 "images1/IMG_2865.JPEG ",
 "images1/IMG_2877.JPEG ",
 "images1/IMG_2968.JPEG ",
 "images1/IMG_3030.JPEG ",
 "images1/IMG_3050.JPEG ",
 "images1/IMG_3065.JPEG ",
 "images1/IMG_3077.JPEG ",
 "images1/IMG_3095.JPEG ",
 "images1/IMG_3135.JPEG ",
 "images1/IMG_3175.JPEG ",
 "images1/IMG_3266.JPEG ",
 "images1/IMG_3276.JPEG ",
 "images1/IMG_3279.JPEG ",
 "images1/IMG_3397.JPEG ",
 "images1/IMG_3434.JPEG ",
 "images1/IMG_3470.JPEG ",
 "images1/IMG_3554.JPEG ",
 "images1/IMG_3593.JPEG ",
 "images1/IMG_3603.JPEG ",
 "images1/IMG_3612.JPEG ",
 "images1/IMG_3640.JPEG ",
 "images1/IMG_3735.JPEG ",
 "images1/IMG_3750.JPEG ",
 "images1/IMG_3767.JPEG ",
 "images1/IMG_3847.JPEG ",
 "images1/IMG_3893.JPEG ",
 "images1/IMG_3904.JPEG ",
 "images1/IMG_3920.JPEG ",
 "images1/IMG_3938.JPEG ",
 "images1/IMG_4036.JPEG ",
 "images1/IMG_4062.JPEG ",
 "images1/IMG_7449.JPEG ",
 "images1/IMG_7469.JPEG ",
 "images1/IMG_7538.JPEG ",
 "images1/IMG_7732.JPEG ",
 "images1/IMG_8239.JPEG ",
 "images1/IMG_8251.JPEG ",
 "images1/IMG_8335.JPEG ",
 "images1/IMG_8343.JPEG ",
 "images1/IMG_8406.JPEG ",
 "images1/IMG_8431.JPEG ",
 "images1/IMG_8451.JPEG ",
 "images1/IMG_8484.JPEG ",
 "images1/IMG_8496.JPEG ",
 "images1/IMG_8780.JPEG ",
 "images1/IMG_8794.JPEG ",
 "images1/IMG_8863.JPEG ",
 "images1/IMG_8875.JPEG ",
 "images1/IMG_9036.JPEG ",
 "images1/IMG_9089.JPEG ",
 "images1/IMG_9104.JPEG ",
 "images1/IMG_9111.JPEG ",
 "images1/IMG_9251.JPEG ",
 "images1/IMG_9278.JPEG ",
 "images1/IMG_9281.JPEG ",
  "images1/IMG_9558.JPEG ",
 "images1/IMG_9612.JPEG ",
 "images1/IMG_9705.JPEG ",
 "images1/IMG_9729.JPEG ",
 "images1/IMG_9745.JPEG ",
 "images1/IMG_9937.JPEG ",
 "images1/IMG_9960.JPEG"
];

const bgColors = "#000000ff"

// Pick random index
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Set random content
document.body.style.background = bgColors;
document.getElementById("headline").innerText = headlines[randomIndex(headlines)];
document.getElementById("message").innerText = messages[randomIndex(messages)];
document.getElementById("image").src = images1[randomIndex(images1)];

setInterval(() => {
  document.body.style.background = bgColors;
  document.getElementById("headline").innerText = headlines[randomIndex(headlines)];
  document.getElementById("message").innerText = messages[randomIndex(messages)];
  document.getElementById("image").src = images1[randomIndex(images1)];
}, 3000); // every 3 seconds



// Load external HTML into the overlay div
fetch('../test/test.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('overlay-container').innerHTML = html;
  })
  .catch(err => console.error("Failed to load test.html:", err));


  document.addEventListener("DOMContentLoaded", () => {
  const gifs = document.querySelectorAll(".gif");
  gifs.forEach(gif => {
    const x = Math.random() * 80; // %
    const y = Math.random() * 80; // %
    gif.style.top = `${y}%`;
    gif.style.left = `${x}%`;
  });
});

