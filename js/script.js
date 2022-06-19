const inputs = document.querySelectorAll(".writeable-input");
const submit = document.querySelector(".submit-btn");
submit.addEventListener("click", (e) => {
  inputs.forEach((input) => {
    const errorIcon = input.nextElementSibling;
    const errorMsg = input.parentElement.nextElementSibling;
    const div = input.parentElement.parentElement;
    input.addEventListener("invalid", () => {
      errorIcon.style.display = "inline-block";
      errorMsg.style.display = "inline-block";
      div.style.marginBottom = "5px";
      input.parentElement.style.borderColor = "hsl(0, 100%, 74%)";
      input.setCustomValidity(" ");
    });
  });
});
