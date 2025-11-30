const heading = document.getElementById('main-title');
heading.textContent = 'Welcome to the DOM World!';

const paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
  p.style.color = 'blue';
}
const container = document.querySelector('.container');
container.style.backgroundColor = 'yellow';
