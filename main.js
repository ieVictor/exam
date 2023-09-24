import { openMenu } from './js/openMenu.js'
import { openModal, closeModal } from './js/openModal.js'
import { savePost } from './js/savePost.js'

document.querySelector('.menu-btn')
  .addEventListener('click', openMenu)

document.querySelector('.create-post')
  .addEventListener('click', openModal)

document.getElementById('close-panel-icon')
  .addEventListener('click', closeModal)

document.getElementById('create-post-btn')
  .addEventListener('click', savePost)
