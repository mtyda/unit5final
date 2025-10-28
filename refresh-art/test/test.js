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

// ...existing code...
(function () {
  function buildGallery(id) {
    const container = document.getElementById(id);
    if (!container) return;
    const list = container.getAttribute('data-images') || '';
    const files = list.split(',').map(s => s.trim()).filter(Boolean);
    container.innerHTML = ''; // clear placeholder

    // create img elements for each file
    files.forEach((f, i) => {
      const img = document.createElement('img');
      img.src = f; // path relative to test.html
      img.alt = `${id}-img-${i}`;
      img.className = 'gallery-img';
      // stack/positioning class can be controlled with CSS (e.g., show only first, or grid)
      if (i !== 0) img.style.display = 'none';
      container.appendChild(img);
    });

    // optional: simple next/prev controls to cycle images
    if (files.length > 1) {
      let current = 0;
      const next = () => {
        const imgs = container.querySelectorAll('img');
        imgs[current].style.display = 'none';
        current = (current + 1) % imgs.length;
        imgs[current].style.display = '';
      };
      // auto-advance every 3s
      setInterval(next, 3000);
    }
  }

  // initialize both galleries
  buildGallery('left-gallery');
  buildGallery('right-gallery');
})();
 // ...existing code...

// --- DIFFERENT REFRESH SPEEDS ---
setInterval(() => {
  leftImage.src = randomItem(leftImages);
}, 3000); // Left image changes every 5 seconds

setInterval(() => {
  rightImage.src = randomItem(rightImages);
}, 5000); // Right image changes every 15 seconds
