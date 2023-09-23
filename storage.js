// storage.js
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbPost')) ?? [];
const setLocalStorage = (dbPost) =>
  localStorage.setItem('dbPost', JSON.stringify(dbPost));

// CRUD - CREATE
export const createPost = (post) => {
  const dbPost = getLocalStorage();
  dbPost.push(post);
  setLocalStorage(dbPost);
};

// CRUD - READ
export const readPost = () => getLocalStorage();

// CRUD - UPDATE
export const updatePost = (index, post) => {
  const dbPost = readPost();
  dbPost[index] = post;
  setLocalStorage(dbPost);
};

// CRUD - DELETE
export const deletePost = (index) => {
  const dbPost = readPost();
  dbPost.splice(index, 1);
  setLocalStorage(dbPost);
};
