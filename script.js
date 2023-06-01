let scrollToTopButton = document.getElementById("goToTopButton");

window.onscroll = () => {
    scrollDown();
};

function scrollDown() {
  if (document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function goToTop() {
  document.documentElement.scrollTop = 0;
}

let logo = dcument.getElementByQuerySelector(".logo-name");
logo.onclick = () => {
    window.location.href = "/main.html";
}