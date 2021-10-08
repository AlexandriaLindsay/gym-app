export function scroll(scrollTo) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + scrollTo;  
  const overlay = document.querySelector('.overlay');
  const main = document.querySelector('main');
  const button = document.querySelector('.button_container');
  overlay.classList.remove("open");
  button.classList.remove("active");
  main.classList.remove("opacity");
  return false;
}  

export function removeClass() {
  const overlay = document.querySelector('.overlay');
  const main = document.querySelector('main');
  const button = document.querySelector('.button_container');
  overlay.classList.remove("open");
  button.classList.remove("active");
  main.classList.remove("opacity");
}