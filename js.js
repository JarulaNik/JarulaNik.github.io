const button = document.querySelector('button');

button.addEventListener('click', function() {
  const videoContainer = document.createElement('div');
  videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  document.body.appendChild(videoContainer);
});