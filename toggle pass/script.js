let inp = document.querySelector("input");
let btn = document.querySelector("button");
let div = document.querySelector("div");
let form = document.querySelector("form");
btn.addEventListener("click", togglePass);
function togglePass() {
  if (inp.type == "password") {
    inp.type = "text";
    btn.innerHTML = "hide";
  } else {
    inp.type = "password";
    btn.innerHTML = "show";
  }
}
// getAttribute
// let tempBtn = "show";
// if (tempBtn == "show") {
//   btn.addEventListener("click", showPass);
//   btn.innerHTML = "show";
// } else {
//   btn.addEventListener("click", hidePass);
//   btn.innerHTML = "hide";
// }
// function showPass() {
//   if ((inp.type = "password")) {
//     inp.type = "text";
//     tempBtn = "hide";
//   }
// }
// function hidePass() {
//   if (inp.type == "text") {
//     inp.type = "password";
//     tempBtn = "show";
//   }
// }
