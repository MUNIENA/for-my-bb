const message = [
  "บางวันที่เธอรู้สึกเหนื่อย รู้สึกไม่ดี หรือวันที่รู้สึกว่าตัวเองไม่ดีพอ",
  "เค้าอยากบอกให้เธอรู้ไว้ว่าเธอเก่งมากเลยนะ",
  "เค้าภูมิใจในตัวเธอมาก ๆ",
  "ถึงบางทีจะไม่ได้พูดออกไป...",
  "แต่เค้าเชื่อมั่นในตัวเธอมาตลอด และจะเป็นแบบนั้นตลอดไป:)"
];

let i = 0;
let textIndex = 0;
let currentText = '';
let isDeleting = false;

function typeEffect() {
  if (i < message.length) {
    if (!isDeleting && textIndex <= message[i].length) {
      currentText = message[i].substring(0, textIndex++);
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
  document.getElementById("finalMessage").classList.remove("hidden");
}

window.onload = typeEffect;


  <script src="script.js"></script>
</body>
</html>
