export function scroll(scrollTo) {
    document.querySelector('#' + scrollTo).scrollIntoView({ 
      behavior: 'smooth' 
    });
}  