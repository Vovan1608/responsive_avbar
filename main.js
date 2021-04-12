"use strict";

const menuButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

menuButton.addEventListener("click", () => {
	console.log(links.classList);
});