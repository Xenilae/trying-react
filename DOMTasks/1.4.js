// const isExternalLink = (url) => {
//     const tmp = document.createElement('a');
//     tmp.href = url;
//     return tmp.host !== window.location.host;
// };

// const content = document.getElementById("box")
// if (isExternalLink == true) {
//     content.innerHTML = isExternalLink
// }

// isExternalLink("https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML")

const links = document.querySelectorAll(".link"); 
links.forEach(link => { 
    if(link.innerHTML.indexOf("http://") == 0 || link.innerHTML.indexOf("https://") == 0){ 
        link.style.color = "red"; 
    } 
});