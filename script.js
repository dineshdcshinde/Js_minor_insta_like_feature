let card = document.querySelector(".card");

let heart = document.querySelector(".heart");

let cursor = document.querySelector(".cursor");

let wrapper = document.querySelector(".wrapper");

let para = document.querySelector("p");

let heading = document.querySelector("h3");

card.addEventListener("dblclick", () => {
  heart.style.opacity = "1";
  heart.style.opacity = "0.8";
  heart.style.scale = "1.5";

  setTimeout(() => {
    heart.style.opacity = "0";
  }, 500);
});

// cursor following  effect
wrapper.addEventListener("mousemove", (e) => {
  cursor.style.opacity = "1";
  cursor.style.left = e.x + 10 + "px";
  cursor.style.top = e.y + 5 + "px";
});

card.addEventListener("mouseenter", () => {
  cursor.style.scale = "2";
  para.style.userSelect = "none";
  heading.style.userSelect = "none";
});

card.addEventListener("mouseleave", () => {
  cursor.style.scale = "1";
});
