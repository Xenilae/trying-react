const input = document.getElementById("input_result");

    input.addEventListener("blur", () => {
        if (input.value <= -1) {
            input.value = ""
        }
    });