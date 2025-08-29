// heart Icon click function

const hearts = document.querySelectorAll(".heart");
const heartCount = document.getElementById("heart-count");
let initialCount = 0;
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    initialCount++;
    heartCount.innerText = initialCount;
  });
}