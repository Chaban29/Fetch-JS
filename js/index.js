'use strict';

const renderPosts = async () => {
  const posts = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(posts);
  const result = await response.json();
  const list = document.createElement('ul');
  result.map((item, index) => {
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
    listHeading.innerHTML = item.title;
    postText.innerHTML = item.body;
    postLink.innerHTML = 'Read more';
    listItem.append(listIndex, listHeading, postText, postLink);
    list.appendChild(listItem);
    document.body.append(list);
  });
};

renderPosts();
