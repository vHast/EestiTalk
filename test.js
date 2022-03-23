// Declaration of the answers by exercise 

// Exercise 1 
const regExOne = /Hommikust/i;
const regExOneAlt = /Tere hommikust/i;
checkMark1 = document.getElementById('ex1check');
checkMark1fail = document.getElementById('ex1checkfail');

const exerciseOne = (answer) => {
  if (regExOne.test(answer) || regExOneAlt.test(answer)) {
    checkMark1.style.display = 'block';
  }
  checkMark1fail.style.display = 'block';
};
// Exercise 2 