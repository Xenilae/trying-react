let counter = 0;

const add = document.getElementById("add")
const del = document.getElementById("delete")


add.addEventListener("click", () => {
    counter++;
    document.getElementById("counter").innerHTML = clicks;
    if (clicks >= 9) {
        add.disabled = true;
    }
});

del.addEventListener("click", () => {
    counter--;
    document.getElementById("counter").innerHTML = clicks;
    if (clicks <= 0) {
        del.disabled = true;
    }
});