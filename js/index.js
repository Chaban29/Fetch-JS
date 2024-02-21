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

