// Get references to the HTML elements
const sidebarToggle = document.querySelector('#sidebar-toggle');
const sidebar = document.querySelector('#sidebar');
const sidebarClose = document.querySelector('#sidebar-close');
const overlay = document.querySelector('#overlay');
const body = document.querySelector('body');

// Add event listeners for the toggle button and close button
sidebarToggle.addEventListener('click', function() {
  body.classList.add('open');
});

sidebarClose.addEventListener('click', function() {
  body.classList.remove('open');
});

// Close the sidebar when the user clicks anywhere outside it
overlay.addEventListener('click', function() {
  body.classList.remove('open');
});
