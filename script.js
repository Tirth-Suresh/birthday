let current = 1;
let correctPassword = "1234";

function unlock() {
  let input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    startStory();
  } else {
    alert("Wrong password 😅");
  }
}

function startStory() {
  document.getElementById("screen1").classList.add("active");

  setTimeout(() => {
    document.getElementById("music").play();
    confetti({ particleCount: 120, spread: 70 });
    nextScreen();
    startTyping();
  }, 1500);

  setTimeout(() => nextScreen(), 4000);
  setTimeout(() => nextScreen(), 8000);
  setTimeout(() => {
    nextScreen();
    startSlideshow();
  }, 12000);
}

function nextScreen() {
  document.getElementById("screen" + current).classList.remove("active");
  current++;
  document.getElementById("screen" + current).classList.add("active");
}

let msg = "May Krishna bless you so much 💖✨";
let i = 0;

function startTyping() {
  function type() {
    if (i < msg.length) {
      document.getElementById("typing").innerHTML += msg[i];
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

let images = ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"];
let index = 0;

function startSlideshow() {
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
  }, 2000);
}

function cutCake() {
  confetti({ particleCount: 300, spread: 120 });
  nextScreen();
}

function playVoice() {
  document.getElementById("voice").play();
}

function shareWhatsApp() {
  let text = "Happy Birthday Sneha Bhabhi 🎂💖";
  let url = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`);
}