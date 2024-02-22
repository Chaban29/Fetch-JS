'use strict';

const renderPosts = async () => {
  const posts = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(posts);
  const result = await response.json();
  const list = document.createElement('ul');
  list.classList.add('news__list');
  const listNewsTitle = document.createElement('h1');
  listNewsTitle.innerHTML = 'Posts News by Fetch';
  result.map((post, index) => {
    // create elements
    const listItem = document.createElement('li');
    const listIndex = document.createElement('span');
    const listHeading = document.createElement('h3');
    const postText = document.createElement('p');
    const postLink = document.createElement('a');
    // add classes
    listItem.classList.add('posts__list--item');
    listIndex.classList.add('listIndex');
    listHeading.classList.add('listHeading');
    postText.classList.add('postText');
    postLink.classList.add('postLink');
    postLink.href = 'https://google.com';
    postLink.target = '_blank';
    // updating content
    listIndex.innerHTML = index + 1;
    listHeading.innerHTML = post.title;
    postText.innerHTML = post.body;
    postLink.innerHTML = 'Read more';
    listItem.append(listIndex, listHeading, postText, postLink);
    list.appendChild(listItem);
    document.body.append(list);
    document.body.prepend(listNewsTitle);
  });
};

renderPosts();

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

(async () => {
  let url =
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);

  let result = await response.json();

  console.log(result[0].author.login);
})();

let users = 'https://jsonplaceholder.typicode.com/users';

(async () => {
  let response = await fetch(users);
  console.log(response.headers.get('Content-Type'));
  for (let [key, value] of response.headers) {
    console.log(`${key}=${value}`);
  }
})();

const posts = 'https://jsonplaceholder.typicode.com/posts/101';

const newPost = {
  userId: 101,
  id: 101,
  title: 'hello',
  body: 'hello body',
};

const response = fetch(posts, {
  method: 'DELETE',
  body: JSON.stringify(newPost),
});

response.then((resultOfPosts) => console.log(resultOfPosts)).then(console.log);
