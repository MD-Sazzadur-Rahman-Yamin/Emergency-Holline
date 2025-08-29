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

//Call button Function

const calls = document.querySelectorAll(".btn-2");
for (const call of calls) {
  call.addEventListener("click", function () {
    let coinCountag = document.getElementById("coin-count");
    let coinCount = parseInt(coinCountag.innerText);
    if (coinCount < 20) {
      alert("You dos't have enough coins to call");
      return;
    } else {
      coinCount -= 20;
      coinCountag.innerText = coinCount;
      const serviceName =
        call.parentNode.parentNode.children[1].children[0].innerText;
      const callHotlineNumber =
        call.parentNode.parentNode.children[2].children[0].innerText;
      alert(
        `Service name: ${serviceName} and Hotline Number: ${callHotlineNumber}`
      );
      const historyListContainer = document.getElementById(
        "history-list-container"
      );
      const now = new Date();
      const time = now.toLocaleTimeString("en-US");
      const wrapper = document.createElement("div");
      wrapper.innerHTML = `
      <div class="history-list">
                <div class="history-list-left">
                  <h4>${serviceName}</h4>
                  <p>${callHotlineNumber}</p>
                </div>
                <div>
                  <p>${time}</p>
                </div>
              </div>
        `;
      historyListContainer.appendChild(wrapper);
    }
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
    const copyHotlineNumber =
      copy.parentNode.parentNode.children[2].children[0].innerText;
    navigator.clipboard.writeText(copyHotlineNumber);
    alert(copyHotlineNumber + " copied");
    console.log(copyHotlineNumber);
  });
}

// Clear history function
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-list-container").innerText = "";
});
