const formInput = [...document.getElementsByTagName("input")];
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
	formInput.forEach((input) => {
		if (input.checkValidity() === false) {
			input.classList.add("invalid");
		}
	});
});

formInput.forEach((input) => {
	input.addEventListener("input", () => {
		if (input.checkValidity() === true) {
			input.classList.remove("invalid");
		}
	});
});
