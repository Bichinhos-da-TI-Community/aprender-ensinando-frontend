function toggleDarkMode() {
    var body = document.body;
    var botonImage = document.querySelector('.custom-boton img');
  
    body.classList.toggle("dark-mode");
    botonImage.src = body.classList.contains('dark-mode') ? '../img/dark-mode-button.png' : '../img/light-mode-button.png';
  }