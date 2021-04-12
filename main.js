"use strict";

const menuButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

menuButton.addEventListener("click", () => {
	if (links.classList.contains("show-links")) {
		links.classList.remove("show-links");
	} else {
		links.classList.add("show-links");
	}
});