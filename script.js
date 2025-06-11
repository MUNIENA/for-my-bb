const messages = [
  "บางวันที่เธอรู้สึกเหนื่อย รู้สึกไม่ดี หรือวันที่รู้สึกว่าตัวเองไม่ดีพอ",
  "เค้าอยากบอกให้เธอรู้ไว้ว่าเธอเก่งมากเลยนะ",
  "เค้าภูมิใจในตัวเธอมาก ๆ",
  "ถึงบางทีจะไม่ได้พูดออกไป...",
  "แต่เค้าเชื่อมั่นในตัวเธอมาตลอด และจะเป็นแบบนั้นตลอดไป :)"
];

let i = 0;
let textIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
  if (i < messages.length) {
    if (!isDeleting && textIndex <= messages[i].length) {
      currentText = messages[i].substring(0, textIndex++);
      document.getElementById("message").innerHTML = currentText;
      setTimeout(typeEffect, 60);
    } else {
      isDeleting = false;
      i++;
      textIndex = 0;
      setTimeout(typeEffect, 1000);
    }
  }
}

function showMore() {
  const finalMsgEl = document.getElementById("finalMessage");
  finalMsgEl.classList.remove("hidden");
}

window.onload = typeEffect;
