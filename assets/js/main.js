// Função pro parallax no site
function scroll() {
  scrollPos = window.scrollY;
  var headerText = document.querySelector('welcome h3')
  headerText.style.marginTop = -(scrollPos/3)+"px";
  headerText.style.opacity = 1-(scrollPos/480);
}

window.addEventListener('scroll', scroll);
