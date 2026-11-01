    const display = document.getElementById("display");

    function appendValue(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }

    function calculateResult() {
      try {
        const expression = display.value;
        if (!expression) return;

        // Basic validation to avoid malicious or invalid input
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
          throw new Error("Invalid expression");
        }

        const result = Function(`"use strict"; return (${expression});`)();
        display.value = Number.isFinite(result) ? result : "Error";
      } catch {
        display.value = "Error";
      }
    }