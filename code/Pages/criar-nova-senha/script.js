function toggleDarkMode() {
  var body = document.body;
  var buttonImage = document.querySelector('.menu img');

  body.classList.toggle('dark-mode');
  buttonImage.src = body.classList.contains('dark-mode')
    ? '../../../img/dark-mode-button.png'
    : '../../../img/light-mode-button.png';
}
