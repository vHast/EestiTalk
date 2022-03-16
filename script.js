const hoverWord = (obj) => {
  let fadedWord = document.getElementById('targetHover');
  fadedWord.style.color = 'black';
  fadedWord.style.transition = '0.2s ease-in'
}

const outHoverWord = (obj) => {
  let fadedWord = document.getElementById('targetHover');
  fadedWord.style.color = 'white';
  fadedWord.style.transition = '0.2s ease-in'
}

// Now we have to find a way to put this function universally available without duplicating it