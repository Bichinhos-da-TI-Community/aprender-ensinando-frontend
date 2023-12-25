function toggleDarkMode() {
    var body = document.body;
    var botonImage = document.querySelector('.custom-boton img');
    var githubIcon = document.querySelector('.githubIcon');
    var linkedinIcon = document.querySelector('.linkedinIcon');
    var leftArrow = document.querySelector('.enter-link img')
    

    body.classList.toggle("dark-mode");
    botonImage.src = body.classList.contains('dark-mode') ? '/img/luzetrevas2.png' : '/img/luzetrevas.png';
    githubIcon.src = body.classList.contains('dark-mode') ? '/img/githubdark.png'  : '/img/github.png' ;
    linkedinIcon.src = body.classList.contains('dark-mode') ? '/img/linkedindark.png' : '/img/linkedin.png';
    leftArrow.src = body.classList.contains('dark-mode') ? '/img/darkleftarrow.svg' : '/img/left-arrow.svg';
}