const inputField = [...document.getElementsByClassName("inputField")];
const submitBtn = document.getElementById("submitBtn");

function emailValidity(userEmail) {
	return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail);
}

function formatInputName(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).replace("-", " ");
}

submitBtn.addEventListener("click", (e) => {
	inputField.forEach((inputField) => {
		const input = inputField.getElementsByTagName("input")[0];
		const warning = inputField.getElementsByTagName("em")[0];

		if (!input.checkValidity() && input.type !== "email") {
			input.classList.add("invalid");
			warning.innerText = formatInputName(input.name) + " cannot be empty";
		}

		if (input.type === "email" && !emailValidity(input.value)) {
			input.classList.add("invalid");
			warning.innerText =
				"Look like this not an " + formatInputName(input.name);
			if (input.value === "") {
				warning.innerText = formatInputName(input.name) + " cannot be empty";
			}
		}

		if (input.classList.contains("invalid")) {
			e.preventDefault();
		}
	});
});

inputField.forEach((inputField) => {
	const input = inputField.getElementsByTagName("input")[0];
	const warning = inputField.getElementsByTagName("em")[0];
	input.addEventListener("input", () => {
		if (input.checkValidity() && input.type !== "email") {
			input.classList.remove("invalid");
		} else if (input.type === "email" && emailValidity(input.value)) {
			input.classList.remove("invalid");
		}
	});
});
