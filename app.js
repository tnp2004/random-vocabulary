const closeButton = document.querySelector('#close-button');
const settingButton = document.querySelector('#setting-button');
const menu = document.querySelector('#menu');

closeButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})

settingButton.addEventListener('click', () => {
    menu.classList.toggle('d-none');
    console.log('close');
})