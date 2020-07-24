const text = document.querySelector("input[type='text']");
const color = document.querySelector("input[type='color']");
const size = document.querySelector("input[type='range']");
const form = document.querySelector("#monkey")

form.addEventListener('submit', function(e){
    e.preventDefault(); // will prevent refreshing or redirect to other page
    console.log("submitted the form");
    makeLogo(text.value, color.value, `${size.value}px`);
});

function makeLogo(text, color, size){
    const elem = document.createElement("h1");
    elem.innerText = text;
    elem.style.color = color;
    elem.style.fontSize = size;
    document.querySelector("body").append(elem);
}

