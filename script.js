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

//copy Button Function
const copys = document.querySelectorAll(".btn-1");
const copyCount = document.getElementById("copy-count");
let copyinitialCount = 0;
for (const copy of copys) {
  copy.addEventListener("click", function () {
    copyinitialCount++;
    copyCount.innerText = copyinitialCount;
    // Copy the number
      const copyHotlineNumber = copy.parentNode.parentNode.children[2].children[0].innerText;
      navigator.clipboard.writeText(copyHotlineNumber);
      alert(copyHotlineNumber + " copied");
      console.log(copyHotlineNumber);
  });

}

// Clear history function
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-list-container").innerText = "";
});
