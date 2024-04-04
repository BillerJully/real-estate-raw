
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 50) { 
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});