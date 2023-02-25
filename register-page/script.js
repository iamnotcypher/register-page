const INPUTGROUP = document.querySelectorAll('input');
const FORM = document.querySelector('#form');
const FNAMEFIELD = document.querySelector('#firstName');
const LNAMEFIELD = document.querySelector('#lastName');
const NUMBERFIELD = document.querySelector('#number');
const EMAILFIELD = document.querySelector('#email');
const PASSWORDFIELD = document.querySelector('#password');

INPUTGROUP.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focus')
  });
  input.addEventListener('blur', () => {
    input.parentElement.classList.remove('focus')
  });
});

const FIELDERROR = (value) => {
  value.textContent = 'this field is required'
  value.previousElementSibling.classList.add('error')
  setTimeout(() => {
    value.previousElementSibling.classList.remove('error')
    value.textContent = ''
  }, 2000)
}

FORM.addEventListener('submit', e => {
  e.preventDefault();

  if(!FNAMEFIELD.value) {
    FIELDERROR(FNAMEFIELD.parentElement.nextElementSibling);
    return;
  }
  if(!LNAMEFIELD.value) {
    FIELDERROR(LNAMEFIELD.parentElement.nextElementSibling);
    return;
  }
  if(!NUMBERFIELD.value) {
    FIELDERROR(NUMBERFIELD.parentElement.nextElementSibling);
    return;
  }
  if(!EMAILFIELD.value) {
    FIELDERROR(EMAILFIELD.parentElement.nextElementSibling);
    return
  }
  if(!PASSWORDFIELD.value) {
    FIELDERROR(PASSWORDFIELD.parentElement.nextElementSibling);
    return
  } else {
    console.log('successful')
  }
});