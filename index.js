const sidebar = document.getElementById("side-bar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
