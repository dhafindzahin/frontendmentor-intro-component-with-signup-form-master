const formInput = [...document.getElementsByTagName("input")];
const submitBtn = document.getElementById("submitBtn");

function emailValidity(userEmail) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail) && userEmail !== "";
}

submitBtn.addEventListener("click", (e) => {
	formInput.forEach((input) => {
		if (!input.checkValidity() && input.type !== "email") {
			input.classList.add("invalid");
		} else if (input.type === "email" && !emailValidity(input.value)) {
			input.classList.add("invalid");
		}
		if (input.classList.contains("invalid")) {
			e.preventDefault();
		}
	});
});

formInput.forEach((input) => {
	input.addEventListener("input", () => {
		if (input.checkValidity() && input.type !== "email") {
			input.classList.remove("invalid");
		} else if (input.type === "email" && emailValidity(input.value)) {
			input.classList.remove("invalid");
		}
	});
});
