"use strict";
function checkEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email = document.querySelector(".email").value;
  if (regex.test(email)) {
    document.querySelector(".form-info").classList.toggle("hidden");
    document.querySelector(".info-content").classList.toggle("hidden");
  } else {
    alert("Email không hợp lệ vui lòng thử lại !");
  }
}

for (let i = 0; i < 6; i++) {
  document.querySelector(`.btn${i}`).addEventListener("click", showhidden);
  let swBtnLabel = document.querySelector(`.btn${i}`).textContent;
  function showhidden() {
    document.querySelector(`.intro-item${i}`).classList.toggle("hidden");
    document.querySelector(`.btn${i}`).textContent =
      swBtnLabel === "▼ VIEW MORE"
        ? (swBtnLabel = "▲ VIEW LESS")
        : (swBtnLabel = "▼ VIEW MORE");
  }
}
function hiddenBtn() {
  for (let i = 0; i < 6; i++) {
    document.querySelector(`.btn${i}`).style.zIndex = "-1";
  }
}

document.querySelector(".btn-submid").addEventListener("click", checkEmail);
email.addEventListener("keypress", function keyEnter(a) {
  if (a.key === "Enter") checkEmail();
});

document.addEventListener("touchstart", hiddenBtn);

for (let i = 0; i < 6; i++) {
  document
    .querySelector(`.box${i}`)
    .addEventListener("touchstart", function () {
      hiddenBtn();
      document.querySelector(`.btn${i}`).style.zIndex = "1";
    });
}
