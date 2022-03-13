const hoverWord = (obj) => {
  let fadedWord = document.getElementById('targetHover');
  fadedWord.style.color = 'white';
}

const outHoverWord = (obj) => {
  let fadedWord = document.getElementById('targetHover');
  fadedWord.style.color = 'black';
}

// Now we have to find a way to put this function universally available without duplicating it