const body = document.querySelector("body");

function handleResize() {
  const width = window.innerWidth;

  const cornFlowerBlue = "cornflowerblue";
  const mediumpurple = "mediumpurple";
  const gold = "gold";

  if (width <= 900) {
    body.classList.add(cornFlowerBlue);
    body.classList.remove(mediumpurple);
  } else if (width > 900 && width <= 1300) {
    body.classList.remove(cornFlowerBlue);
    body.classList.remove(gold);
    body.classList.add(mediumpurple);
  } else {
    body.classList.add(gold);
    body.classList.remove(mediumpurple);
  }
}

window.addEventListener("resize", handleResize);
