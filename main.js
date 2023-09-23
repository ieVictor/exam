import {openMenu} from './openMenu.js';
import {openModal, closeModal} from './openModal.js';


document.querySelector('.menu-btn')
    .addEventListener('click', openMenu);

document.querySelector('.create-post')
    .addEventListener('click', openModal);

document.getElementById('close-panel-icon')
    .addEventListener('click', closeModal);


