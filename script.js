const INPUTGROUP = document.querySelectorAll('input');

INPUTGROUP.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focus')
  });
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focus')
  });
})