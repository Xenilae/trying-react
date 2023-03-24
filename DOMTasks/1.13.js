const box = document.querySelector(".expandableBox");
const boxBig = document.querySelector("#button2");
const button = document.querySelector("#button1");

const showSize = () => {
	alert(getComputedStyle(box).height + ' ' + getComputedStyle(box).width);
}

showSize();

const boxSizing = ({width = 0, height = 0}) => {
    box.style.width = width + "px";
    box.style.height = height + "px";

    boxBig.addEventListener("click", function() {
        box.style.width = width * 2 + "px";
        box.style.height = height * 2 + "px"; //works just one time
})
}

boxSizing({
    height: 200,
    width: 200,
});

button.addEventListener('click', func);






