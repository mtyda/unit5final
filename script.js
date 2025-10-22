const storyText = document.getElementById("story-text");

const story = [
  "Error 404. File not found.",
  "here lies my creativity. 2006-2025. RIP.",
  "-No need to be dramatic-",
  "-How would you like to start this piece?-",
  "I don't know.",
  "-is there anything that interests you?-",
  "I don't know",
  "-What do you do in your spare time?-",
  "Nothing.",
  "-Don't you have any ideas to spark that creativity?-",
  "-Anything at all?-",
  "how do I create art when I feel like everything has been done before?",
  "..."
];

let currentLine = 0;

document.body.addEventListener("click", () => {
  if (currentLine < story.length) {
    fadeText(story[currentLine]);
    currentLine++;
  } else {
    fadeText("...");
  }
});

function fadeText(newText) {
  storyText.style.opacity = 0;
  setTimeout(() => {
    storyText.innerText = newText;
    storyText.style.opacity = 1;
  }, 600);
}

// Automatically redirect to home page after 1 minute (60000 ms)
setTimeout(() => {
  // Only redirect if the user is NOT already on the homepage
  if (!window.location.pathname.endsWith("index.html") && window.location.pathname !== "subpage") {
    window.location.href = "index.html";
  }
}, 60000);