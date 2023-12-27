function toggleDarkMode() {
	var body = document.body;
	var buttonImage = document.querySelector(".custom-button img");
	var passwordRecoveryContainer = document.querySelector(
		".passwordRecoveryContainer"
	);
	var formH1 = document.querySelector(".passwordRecoveryContainer > h1");
	var formP = document.querySelector(".passwordRecoveryContainer > p");
	var formInput = document.querySelector(".passwordRecoveryContainer > input");
	var formButton = document.querySelector(
		".passwordRecoveryContainer > button"
	);
	var formLink = document.querySelector(".passwordRecoveryContainer > a");
	var navButton = document.querySelector(".nav > button");
	var navLink = document.querySelector(".nav > a");

	passwordRecoveryContainer.classList.toggle(
		"passwordRecoveryContainer-darkmode"
	);
	formH1.classList.toggle("text-darkMode");
	formP.classList.toggle("text-darkMode");
	formInput.classList.toggle("input-darkMode");
	formButton.classList.toggle("button-darkMode");
	formLink.classList.toggle("link-darkMode");
	navButton.classList.toggle("cadbutton-DarkMode");
	navLink.classList.toggle("navLink-darkMode");
	console.log(formH1);
	body.classList.toggle("dark-mode");
	buttonImage.src = body.classList.contains("dark-mode")
		? "/img/dark-mode-button.png"
		: "/img/light-mode-button.png";
}
