const check = document.getElementById("onlyNum");

check.addEventListener("blur",() => {
    if (typeof(check.value) !== "number") {
        check.value = "";
    }
});