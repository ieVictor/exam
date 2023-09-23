import {createPost} from './storage.js';


const clearFields = () => {
  document.getElementById('p-title').value = '';
  document.getElementById('p-content').value = '';
};

export const savePost = () => {
  if (isValidaFields()) {
    const post = {
      title: document.getElementById('p-title').value,
      content: document.getElementById('p-content').value,
      date: new Date().toLocaleString('pt-BR'),
    };
    createPost(post);
    clearFields();
    closeModal();
  }
};

const isValidaFields = () => {
  document.getElementById('form').reportValidity();
};

document.getElementById('create-post-btn')
    .addEventListener('click', (e) => {
      e.preventDefault();
      savePost();
    });
