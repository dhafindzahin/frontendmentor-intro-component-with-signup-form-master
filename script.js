const inputField = [...document.getElementsByClassName("inputField")];
const submitBtn = document.getElementById("submitBtn");

function formatInputName(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).replace("-", " ");
}

submitBtn.addEventListener("click", (e) => {
	let checkOnce = true;
	inputField.forEach((inputField) => {
		const input = inputField.getElementsByTagName("input")[0];
		const warning = inputField.getElementsByTagName("em")[0];

		if (!input.checkValidity()) input.classList.add("invalid");

		if (input.validity.valueMissing) {
			warning.innerText = formatInputName(input.name) + " cannot be empty";
		}
		if (input.validity.patternMismatch && input.type === "email") {
			warning.innerText = "Look like this is not an " + formatInputName(input.name);
		}
		if (input.classList.contains("invalid")) {
			e.preventDefault();
			if (checkOnce) {
				checkOnce = false;
				input.focus();
			}
		}
	});
});

inputField.forEach((inputField) => {
	const input = inputField.getElementsByTagName("input")[0];
	input.addEventListener("input", () => {
		if (input.checkValidity()) {
			input.classList.remove("invalid");
		}
	});
});
