function checkLength() {
	const error = document.getElementById("lastNameError");
	const name = document.getElementById("lastName").value;
	if (name.length < 5) {
		error.style.display = "inline";
	} else {
		error.style.display = "none";
	}
}

let input = document.getElementById("lastName");
input.addEventListener("keyup", checkLength);
