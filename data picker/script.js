const section = document.querySelector('#colors');

section.addEventListener('click', function(e){
    //e.preventDefault();
    document.body.style.backgroundColor = e.target.dataset.hex;
})