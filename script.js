// Reveal day greetings

let revealDays = document.getElementById('revealdays');
let hommikust = document.getElementById('hommikust');
let paevast = document.getElementById('paevast');
let ohtust = document.getElementById('ohtust');

const revealContentDays = () => {
  hommikust.style.color = 'black';
  paevast.style.color = 'black';
  ohtust.style.color = 'black';
}

revealDays.addEventListener('click', revealContentDays);

// Reveal days of the week
let revealWeeks = document.getElementById('revealweeks');

let esmaspaev = document.getElementById('esmas');
let teisipaev = document.getElementById('teisi');
let kolmapaev = document.getElementById('kolma');
let neljapaev = document.getElementById('nelja');
let reede = document.getElementById('ree');
let laupaev = document.getElementById('lau');
let puhapaev = document.getElementById('puha');

const revealDaysOfWeek = () => {
  esmaspaev.style.color - 'black';
  teisipaev.style.color - 'black';
  kolmapaev.style.color - 'black';
  neljapaev.style.color - 'black';
  reede.style.color - 'black';
  laupaev.style.color - 'black';
  puhapaev.style.color - 'black';
};

revealWeeks.addEventListener('click', revealDaysOfWeek);

