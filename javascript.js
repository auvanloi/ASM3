"use strict";

//CHECK EMAIL
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
document.querySelector(".btn-submid").addEventListener("click",checkEmail);

// INTRODUCTION CLICK EVENT

for (let i = 0; i < 6; i++) {
  let swBtnLabel = document.querySelector(`.btn${i}`).textContent;
  document
    .querySelector(`.btn${i}`)
    .addEventListener("click", function showhidden(event) {
      document.querySelector(`.conten${i}`).classList.toggle("hidden");
      document.querySelector(`.box${i}`).classList.toggle("borderbottom");
      document.querySelector(`.btn${i}`).textContent =
        swBtnLabel === "▼ VIEW MORE"
          ? (swBtnLabel = "▲ VIEW LESS")
          : (swBtnLabel = "▼ VIEW MORE");
      event.preventDefault();
    });
}
//INTRODUCTION TOUCH EVENT
for (let i = 0; i < 6; i++) {
  // CONTAINER HIDDEN
  function containerHidden() {
    for (let j = 0; j < 6; j++) {
      if (document.querySelector(`.conten${j}`).classList.contains("hidden")) {
        document.querySelector(`.btn${j}`).classList.add("zid");
        document.removeEventListener("touchend", containerHidden);
      }
    }
  }
  // BOX HIDDEN
  document
    .querySelector(`.box${i}`)
    .addEventListener("touchend", function (event) {
      if (
        !document.querySelector(`.btn${i}`).classList.contains("zid") &&
        document.querySelector(`.conten${i}`).classList.contains("hidden")
      ) {
        document.querySelector(`.btn${i}`).classList.add("zid");
        document.removeEventListener("touchend", containerHidden);
      } else {
        containerHidden();
        document.querySelector(`.btn${i}`).classList.remove("zid");
        document.addEventListener("touchend", containerHidden);
      }
      event.stopPropagation();
      event.preventDefault();
    });
  // BUTTON HIDDEN
  document
    .querySelector(`.btn${i}`)
    .addEventListener("touchend", function (event) {
      document.querySelector(`.box${i}`).classList.toggle("borderbottom");
      if (document.querySelector(`.conten${i}`).classList.contains("hidden")) {
        document.querySelector(`.btn${i}`).textContent = "▲ VIEW LESS";
        document.querySelector(`.conten${i}`).classList.remove("hidden");
      } else {
        document.querySelector(`.btn${i}`).textContent = "▼ VIEW MORE";
        document.querySelector(`.conten${i}`).classList.add("hidden");
      }
      event.stopPropagation();
      event.preventDefault();
    });
}
