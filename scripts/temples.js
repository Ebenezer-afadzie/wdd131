document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Lastmodified: ' +  document.lastModified;

// Hamburger menu functionality
const nav = document.querySelector('nav');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.classList.add('hamburger');
document.body.insertBefore(hamburger, nav);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});