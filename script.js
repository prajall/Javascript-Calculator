const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll("button"));
console.log(buttons);

let displayContent = "";
let pressedEqualto = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const dataId = button.getAttribute("data-id");
    if (displayContent != "" && dataId != "operand" && pressedEqualto) {
      displayContent = "";
      display.innerText = displayContent;
    }
    switch (button.textContent) {
      case "C":
        display.innerText = "";
        displayContent = "";
        break;

      case "=":
        try {
          displayContent = eval(displayContent);
          display.innerText = displayContent;
          pressedEqualto = true;
        } catch {
          display.innerText = "Error!";
        }
        break;

      case "⤌":
        displayContent = displayContent.slice(0, -1);
        console.log(displayContent);
        display.innerText = displayContent;
        break;

      default:
        pressedEqualto = false;
        displayContent += button.textContent;
        display.textContent = displayContent;
        break;
    }
  });
});
