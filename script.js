const button = document.getElementsByClassName('search')[0];
const mainNav = document.getElementsByClassName('mainNav')[0];
const searchNav = document.getElementsByClassName('searchNav')[0];
const crossButton = document.getElementById('button');
const dropdown = document.getElementsByClassName('dropdown')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];
const inputField = document.getElementsByClassName('inputField')[0];
const nav = document.getElementsByClassName('nav')[0]

const list = document.getElementsByClassName('list')[0];

button.addEventListener('click', () => {
  mainNav.style.display = 'none';
  searchNav.style.left = '0vw';
})

crossButton.addEventListener('click', () => {
  mainNav.style.display = 'flex';
  searchNav.style.left = '100vw';
})

hamburger.addEventListener('click',() => {
  dropdown.classList.toggle('back');
  list.classList.toggle('hide');
  inputField.classList.toggle('hide');
  nav.classList.toggle('hamnav');
})

