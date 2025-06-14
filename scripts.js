fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    posts.forEach(post => {
      const card = document.createElement('article');
      card.className = 'post-card';

      const title = document.createElement('h2');
      title.className = 'post-title';
      title.textContent = post.title;

      const desc = document.createElement('p');
      desc.className = 'post-description';
      desc.textContent = post.description;

      const imagesDiv = document.createElement('div');
      imagesDiv.className = 'post-images';

      post.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = post.title + ' image';
        imagesDiv.appendChild(img);
      });

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(imagesDiv);

      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading posts:', error));
