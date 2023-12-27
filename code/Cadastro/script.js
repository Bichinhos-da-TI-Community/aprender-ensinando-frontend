function toggleDarkMode() {
	var body = document.body;
	var buttonImage = document.querySelector(".custom-button img");
	var githubIcon = document.querySelector(".githubIcon");
	var linkedinIcon = document.querySelector(".linkedinIcon");
	var leftArrow = document.querySelector(".enter-link img");

	body.classList.toggle("dark-mode");
	buttonImage.src = body.classList.contains("dark-mode")
		? "/img/dark-mode-button.png"
		: "/img/light-mode-button.png";
	githubIcon.src = body.classList.contains("dark-mode")
		? "/img/github-dark.png"
		: "/img/github.png";
	linkedinIcon.src = body.classList.contains("dark-mode")
		? "/img/linkedin-dark.png"
		: "/img/linkedin.png";
	leftArrow.src = body.classList.contains("dark-mode")
		? "/img/dark-left-arrow.svg"
		: "/img/left-arrow.svg";
}
