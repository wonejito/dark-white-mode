let html = document.querySelector("html");
let btn = document.querySelector("#darkbtn");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

btn.addEventListener("click", function () {
	negro = "rgb(0, 0, 0)";
	blanco = "rgb(255, 255, 255)";
	if (getComputedStyle(html).color == negro && getComputedStyle(h1).color == negro) {
		h1.style.color = blanco;
		html.style.color = blanco;
		body.style.backgroundColor = negro;
	} else {
		h1.style.color = negro;
		html.style.color = negro;
		body.style.backgroundColor = blanco;
	}

	// console.log(getComputedStyle(html).color);
	// console.log(getComputedStyle(h1).color);
});
