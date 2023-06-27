let logo = document.querySelector(".logo-name");
logo.onclick = () => {
  window.location.href = "/index.html";
}

const hamburger = document.querySelector('.toggle-button');
const curtain = document.querySelector('#curtain');
const closebutton = document.querySelector('#curtain > i');
const links = Array.from(document.querySelector('.links').children);

links.forEach(link => {
  link.onclick = () => {
    curtain.style.display = "none";
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
});

hamburger.onclick = () => {
  curtain.style.display = "block";
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

closebutton.onclick = () => {
  curtain.style.display = "none";
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
}