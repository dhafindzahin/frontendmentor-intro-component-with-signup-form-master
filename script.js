const formInput = [...document.getElementsByTagName("input")];
const submitBtn = document.getElementById("submitBtn");

function checkEmail(userEmail) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) || userEmail === "";
}

submitBtn.addEventListener("click", () => {
	formInput.forEach((input) => {
		if (!input.checkValidity() && input.type !== "email") {
			input.classList.add("invalid");
		} else if (input.type === "email" && checkEmail(input.value)) {
			input.classList.add("invalid");
		}
	});
});

formInput.forEach((input) => {
	input.addEventListener("input", () => {
		if (input.checkValidity() && input.type !== "email") {
			input.classList.remove("invalid");
		} else if (input.type === "email" && checkEmail(input.value)) {
			input.classList.remove("invalid");
		}
	});
});
