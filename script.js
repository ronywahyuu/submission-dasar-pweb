"use strict"
const body = document.body

document.addEventListener("DOMContentLoaded", function () {
  const btnThemeWrapper = document.querySelector(".btn-theme-wrapper");
  const createButtonTheme = document.createElement("a");

  createButtonTheme.id = "theme-button"
  createButtonTheme.innerHTML = `
    Change Theme
  `;
  btnThemeWrapper.appendChild(createButtonTheme);

  const btnTheme = document.querySelector("#theme-button");

  btnTheme.addEventListener("click", function () {
    body.classList.toggle("dark")
  })
})
