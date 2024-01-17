const formInput = [...document.getElementsByTagName("input")];
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
	formInput.forEach((input) => {
		if (input.checkValidity() === false) {
			input.classList.add("invalid");
		}
	});
});
