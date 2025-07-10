//your JS code here. If required.
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const body = document.querySelector("body");
    const para = document.createElement("p");
    para.innerHTML = "DOM load success";
    body.appendChild(para);
  }, 100);
	
});