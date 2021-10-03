export function scroll(scrollTo) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + scrollTo;
  return false;
}  