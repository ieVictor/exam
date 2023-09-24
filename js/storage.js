// storage.js

export function getLocalStorage () {
  const storedData = localStorage.getItem('dbPost')
  return JSON.parse(storedData) ?? []
}

export function setLocalStorage (dbPost) {
  localStorage.setItem('dbPost', JSON.stringify(dbPost))
}

// CRUD - CREATE
export function createPost (post) {
  const dbPost = getLocalStorage()
  const postC = document.createElement('div')
  const postList = document.getElementById('post-list')

  postC.classList.add('post')
  postC.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
  `

  postList.appendChild(postC)
  dbPost.push(post)
  setLocalStorage(dbPost)
}

// CRUD - READ
export function readPost () {
  return getLocalStorage()
}

// CRUD - UPDATE
export function updatePost (index, post) {
  const dbPost = readPost() // Supondo que a função readPost() exista para ler os dados do local storage.
  dbPost[index] = post
  setLocalStorage(dbPost) // Supondo que a função setLocalStorage() exista para salvar os dados no local storage.
}

// CRUD - DELETE
export function deletePost (index) {
  const dbPost = readPost() // Supondo que a função readPost() exista para ler os dados do local storage.
  dbPost.splice(index, 1)
  setLocalStorage(dbPost) // Supondo que a função setLocalStorage() exista para salvar os dados no local storage.
}
