const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle"),
  searchBtn = document.querySelector(".search-box"),
  dashboardBtn = document.querySelector(".dashboard"),
  fermentedBtn = document.querySelector(".fermented"),
  distilledBtn = document.querySelector(".distilled"),
  etcBtn = document.querySelector(".etc"),
  locationBtn = document.querySelector(".location"),
  modeSwitch = document.querySelector(".toggle-switch"),
  modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
dashboardBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
fermentedBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
distilledBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
etcBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
locationBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Dark Mode";
  } else {
    modeText.innerText = "Light Mode";
  }
});
