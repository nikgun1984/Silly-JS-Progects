const html = document.querySelector('html');
const width = Math.round(window.innerWidth/255);
const height = Math.round(window.innerHeight/255);
document.addEventListener('mousemove', function(e){

    let pagex = e.pageX/width;
    let pagey = e.pageY/height;
    document.body.style.backgroundColor = `rgb(${pagex},${pagey},${pagex})`;
});