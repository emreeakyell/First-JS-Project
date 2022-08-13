const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "yellow", "green", "purple", "pink", "gray"];

button.addEventListener("click", changeBackground);

function changeBackground() {
  const rastgeleSayi = Math.floor(Math.random() * colors.length);
  const secilenRenk = colors[rastgeleSayi];
  console.log(rastgeleSayi, secilenRenk);
  body.style.backgroundColor = secilenRenk;
}
