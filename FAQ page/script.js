let btn = document.querySelectorAll("#btn");
//btn function
for (let button of btn) {
  button.addEventListener("click", () => {
    const parent = button.parentElement.parentElement;
    parent.classList.toggle("answer");
  });
}
