import { createPost } from './storage.js'
import { closeModal } from './openModal.js'

const clearFields = () => {
  document.getElementById('p-title').value = ''
  document.getElementById('p-content').value = ''
}

export const savePost = () => {
  if (isValidaFields()) {
    const post = {
      title: document.getElementById('p-title').value,
      content: document.getElementById('p-content').value,
      date: new Date().toLocaleString('pt-BR')
    }
    createPost(post)
    clearFields()
    closeModal()
  }
}

export function isValidaFields () {
  const form = document.getElementById('form')
  form.reportValidity()
}
